import { HttpErrorResponse } from '@angular/common/http';
import { FormaPagamentoService } from './../../../http-server/sgc-http/forma-pagamento.service';
import { MatSnackUtilsService } from './../../../shared/service/mat-snack-utils.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forma-pagamento-cadastro',
  templateUrl: './forma-pagamento-cadastro.component.html',
  styles: [
  ]
})
export class FormaPagamentoCadastroComponent implements OnInit {

  form: FormGroup;
  loadingMsg: string;
  envinandoFormulario: boolean;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _snack: MatSnackUtilsService,
    private _formaPagamentoServ: FormaPagamentoService
  ) { }

  ngOnInit(): void {
    this.loadingMsg = 'Carregando dados ...';

    this.form = new FormGroup({
      id: new FormControl(),
      descricao: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(100)])),
    });

    this._activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this._formaPagamentoServ.byId(params['id']).subscribe(grupo => {
          this.form.patchValue(grupo);
        }, (err) => {
          this.loadingMsg = 'Erro ao carregar os dados';
        }, () => this.loadingMsg = '');
      } else {
        this.loadingMsg = '';
      }
    });
  }

  salvar(): void {
    this.envinandoFormulario = true;
    this._formaPagamentoServ.save(this.form.value).subscribe(() => {
      this._snack.messageSaved();
      this._router.navigate(['/sge/cadastros/forma-pagamento']);
    }, (err: HttpErrorResponse) => {
      this.envinandoFormulario = false;
      if (err.status === 400) {
        err.error.errors.forEach();
      }
    }, () => this.envinandoFormulario = false);
  }

  voltar(): void {
    this._router.navigate(['/sge/cadastros/forma-pagamento']);
  }

}
