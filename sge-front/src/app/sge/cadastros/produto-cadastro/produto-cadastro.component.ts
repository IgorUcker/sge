import { UnidadeMedidaService } from './../../../http-server/sgc-http/unidade-medida.service';
import { UnidadeMedida } from './../../../model/tenancy/unidade-medida';
import { HttpErrorResponse } from '@angular/common/http';
import { ProdutoService } from './../../../http-server/sgc-http/produto.service';
import { MatSnackUtilsService } from './../../../shared/service/mat-snack-utils.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.component.html',
  styles: [
  ]
})
export class ProdutoCadastroComponent implements OnInit {

  form: FormGroup;
  loadingMsg: string;
  envinandoFormulario: boolean;
  unidadeMedidaList: UnidadeMedida[];

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _snack: MatSnackUtilsService,
    private _unidademedidaServ: UnidadeMedidaService,
    private _produtoServ: ProdutoService
  ) { }

  ngOnInit(): void {
    this.loadingMsg = 'Carregando dados ...';

    this.form = new FormGroup({
      id: new FormControl(),
      nome: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(100)])),
      codUnidadeMedida: new FormControl(null)
    });

    this._activatedRoute.params.subscribe(params => {
      if (params['id']) {
        forkJoin([this._unidademedidaServ.findAll(), this._produtoServ.byId(params['id'])]).subscribe(results => {
          this.unidadeMedidaList = results[0];
          this.form.patchValue(results[1]);
          this.loadingMsg = '';
        }, (err) => {
          this.loadingMsg = 'Erro ao carregar os dados';
        });
      } else {
        this._unidademedidaServ.findAll().subscribe(unidadeMedidaList => {
          this.unidadeMedidaList = unidadeMedidaList;
          this.loadingMsg = '';
        }, (err) => {
          this.loadingMsg = 'Erro ao carregar os dados';
        });
      }
    });
    }

    salvar(): void {
      this.envinandoFormulario = true;
      this._produtoServ.save(this.form.value).subscribe(() => {
        this._snack.messageSaved();
        this._router.navigate(['/sge/cadastros/produto']);
      }, (err: HttpErrorResponse) => {
        this.envinandoFormulario = false;
        if (err.status === 400) {
          err.error.errors.forEach();
        }
      }, () => this.envinandoFormulario = false);
    }

    voltar(): void {
      this._router.navigate(['/sge/cadastros/produto']);
    }

    compareFn(c1: any, c2: any): boolean {
      return c1 && c2 ? c1.id === c2.id : c1 === c2;
    }
  }
