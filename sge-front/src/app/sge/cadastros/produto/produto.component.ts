import { MatSnackUtilsService } from './../../../shared/service/mat-snack-utils.service';
import { Router } from '@angular/router';
import { DialogConfirmService } from './../../../shared/components/dialog-confirm/dialog-confirm.service';
import { ProdutoService } from './../../../http-server/sgc-http/produto.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Produto } from './../../../model/tenancy/produto';
import { FormGroup, FormControl } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild, EventEmitter, AfterViewInit } from '@angular/core';
import { catchError, debounceTime, distinctUntilChanged, startWith, switchMap, merge, of, map } from 'rxjs';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styles: [
  ]
})
export class ProdutoComponent implements OnInit, AfterViewInit {

  falhaCarregarComponente: string;
  data: any[];
  selecionado = new SelectionModel<Produto>(false);
  headers: { field: string; header: string; class: string; }[];
  columnsToDisplay: string[] = [];
  resultsLength: number;
  isLoadingResults: boolean;
  updating = new EventEmitter();
  form: FormGroup;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(
    private _router: Router,
    private _snack: MatSnackUtilsService,
    private _dialogConfirm: DialogConfirmService,
    private _produtoServ: ProdutoService,
  ) { }

  ngOnInit(): void {
    this.headers = [
      {field: 'nome', header: 'Descrição', class: 'w-5'},
      {field: 'codUnidadeMedida.nome', header: 'Unidade de Medida', class: 'w-5'},
    ];

    this.form = new FormGroup({
      termo: new FormControl()
    });

    this.columnsToDisplay = this.headers.map(i => i.field);
  }

  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    this.sort.active = 'nome';
    this.sort.start = 'desc';

    merge(this.updating, this.sort.sortChange, this.paginator.page, this.form.valueChanges.pipe(debounceTime(400), distinctUntilChanged()))
      .pipe(
        startWith({}),
        switchMap(() => {
          const filter = {
            page: this.paginator.pageIndex,
            size: this.paginator.pageSize,
            sort: `${this.sort.active},${this.sort.direction}`,
            termo: this.form.value.termo
          };

          return this._produtoServ.buscar(filter);
        }),
        map((data: any) => {
          this.isLoadingResults = false;
          this.resultsLength = data.totalElements;
          return data.content;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          return of([]);
        })
      ).subscribe(data => {
      this.data = data;
    });
  }

  cadastrar(): void {
    this._router.navigate(['/sge/cadastros/produto/cadastro']);
  }

  editar(row?: Produto): void {
    if (row) {
      this._router.navigate(['/sge/cadastros/produto/cadastro/' + row.id]);
    } else {
      this._router.navigate(['/sge/cadastros/produto/cadastro/' + (<any> this.selecionado.selected[0]).id]);
    }
  }

  excluir(): void {
    this._dialogConfirm.confirm({
      title: 'Aviso!', message: 'Deseja excluir?'
    }).subscribe(result => {
      if (result == 's') {
        this._produtoServ.delete(<any> this.selecionado.selected[0].id).subscribe(result => {
          this.updating.emit(true);
          this.selecionado.clear();
        });
      }
    });
  }

}
