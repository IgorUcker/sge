import { HttpErrorResponse } from '@angular/common/http';
import { Pessoa } from './../../../model/tenancy/pessoa';
import { PessoaService } from './../../../http-server/sgc-http/pessoa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackUtilsService } from './../../../shared/service/mat-snack-utils.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TipoPessoaMap } from './../../../model/enum/tipo-pessoa.enum';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styles: [
  ]
})
export class PessoaCadastroComponent implements OnInit {

  loadingMsg: string;
  envinandoFormulario: boolean;
  form: FormGroup;
  tipo = TipoPessoaMap;

  constructor(
    private _snack: MatSnackUtilsService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _pessoaService: PessoaService
  ) { }

  ngOnInit(): void {
    this.loadingMsg = 'Carregando dados ...';

    this.form = new FormGroup({
      id: new FormControl(),
      nome: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(100)])),
      tipoPessoa: new FormControl('FISICA', Validators.compose([Validators.required])),
      inscFederal: new FormControl(),
      endereco: new FormControl(),
      complemento: new FormControl(),
      cep: new FormControl(),
      bairro: new FormControl(),
      numero: new FormControl(),
      idCidade: new FormControl(),
    });

    this._activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this._pessoaService.byId(params['id']).subscribe(pessoa => {
          this.form.patchValue(pessoa);

          this.loadingMsg = '';
        }, (err) => {
          this.loadingMsg = 'Erro ao carregar os dados';
        }, () => {
        });
      } else {
        this.loadingMsg = '';
      }
    });
  }

  voltar(): void {
    this._router.navigate(['/sge/cadastros/pessoa']);
  }

  salvar(): void {
    if (this.form.valid) {
      this.envinandoFormulario = true;
      this._pessoaService.save(this.form.value as Pessoa).subscribe((pessoa: Pessoa) => {
        this._snack.messageSaved();

        this._router.navigate(['/sge/cadastros/pessoa']);
      }, (err: HttpErrorResponse) => {
        this.envinandoFormulario = false;
      }, () => this.envinandoFormulario = false);
    }
  }


  tipoPessoaChange(): void {
    this.form.get('inscFederal')?.setValue(null);
  }

}
