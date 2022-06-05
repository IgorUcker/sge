import { HttpErrorResponse } from '@angular/common/http';
import { VeiculoService } from './../../../http-server/sgc-http/veiculo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackUtilsService } from './../../../shared/service/mat-snack-utils.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veiculo-cadastro',
  templateUrl: './veiculo-cadastro.component.html',
  styles: [
  ]
})
export class VeiculoCadastroComponent implements OnInit {

  form: FormGroup;
  loadingMsg: string;
  envinandoFormulario: boolean;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _snack: MatSnackUtilsService,
    private _veiculoServ: VeiculoService
  ) { }

  ngOnInit(): void {
    this.loadingMsg = 'Carregando dados ...';

    this.form = new FormGroup({
      id: new FormControl(),
      nome: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(100)])),
      placa: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(10)]))
    });

    this._activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this._veiculoServ.byId(params['id']).subscribe(grupo => {
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
    this._veiculoServ.save(this.form.value).subscribe(() => {
      this._snack.messageSaved();
      this._router.navigate(['/sge/cadastros/veiculo']);
    }, (err: HttpErrorResponse) => {
      this.envinandoFormulario = false;
      if (err.status === 400) {
        err.error.errors.forEach();
      }
    }, () => this.envinandoFormulario = false);
  }

  voltar(): void {
    this._router.navigate(['/sge/cadastros/veiculo']);
  }

}
