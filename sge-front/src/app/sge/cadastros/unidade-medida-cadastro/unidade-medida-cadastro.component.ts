import { MatSnackUtilsService } from './../../../shared/service/mat-snack-utils.service';
import { UnidadeMedidaService } from './../../../http-server/sgc-http/unidade-medida.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-unidade-medida-cadastro',
  templateUrl: './unidade-medida-cadastro.component.html',
  styles: [
  ]
})
export class UnidadeMedidaCadastroComponent implements OnInit {

  form: FormGroup;
  loadingMsg: string;
  envinandoFormulario: boolean;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _snack: MatSnackUtilsService,
    private _unidadeMedidaServ: UnidadeMedidaService
  ) { }

  ngOnInit(): void {
    this.loadingMsg = 'Carregando dados ...';

    this.form = new FormGroup({
      id: new FormControl(),
      nome: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(10)])),
    });

    this._activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this._unidadeMedidaServ.byId(params['id']).subscribe(grupo => {
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
    this._unidadeMedidaServ.save(this.form.value).subscribe(() => {
      this._snack.messageSaved();
      this._router.navigate(['/sge/cadastros/unidade-medida']);
    }, (err: HttpErrorResponse) => {
      this.envinandoFormulario = false;
      if (err.status === 400) {
        err.error.errors.forEach();
      }
    }, () => this.envinandoFormulario = false);
  }

  voltar(): void {
    this._router.navigate(['/sge/cadastros/unidade-medida']);
  }

}
