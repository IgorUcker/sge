import { merge, startWith, switchMap, map, catchError, of, debounceTime, distinctUntilChanged } from 'rxjs';
import { PessoaService } from './../../../http-server/sgc-http/pessoa.service';
import { DialogConfirmService } from './../../../shared/components/dialog-confirm/dialog-confirm.service';
import { MatSnackUtilsService } from './../../../shared/service/mat-snack-utils.service';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { FormGroup, FormControl } from '@angular/forms';
import { Pessoa } from './../../../model/tenancy/pessoa';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, AfterViewInit, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styles: [
  ]
})
export class PessoaComponent implements OnInit, AfterViewInit {

  falhaCarregarComponente: string;
  data: any[];
  selecionado = new SelectionModel<Pessoa>(false);
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
    private _pessoaServ: PessoaService,
  ) { }

  ngOnInit(): void {
    this.headers = [
      {field: 'tipoPessoa', header: 'Tipo', class: 'w-5'},
      {field: 'nome', header: 'Nome', class: 'w-5'},
      {field: 'inscFederal', header: 'Insc. Federal', class: 'w-5'},
      {field: 'endereco', header: 'Endereço', class: 'w-5'},
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

          return this._pessoaServ.buscar(filter);
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
    this._router.navigate(['/sge/cadastros/pessoa/cadastro']);
  }

  editar(row?: Pessoa): void {
    if (row) {
      this._router.navigate(['/sge/cadastros/pessoa/cadastro/' + row.id]);
    } else {
      this._router.navigate(['/sge/cadastros/pessoa/cadastro/' + (<any> this.selecionado.selected[0]).id]);
    }
  }

  excluir(): void {
    this._dialogConfirm.confirm({
      title: 'Aviso!', message: 'Deseja excluir?'
    }).subscribe(result => {
      if (result == 's') {
        this._pessoaServ.delete(<any> this.selecionado.selected[0].id).subscribe(result => {
          this.updating.emit(true);
          this.selecionado.clear();
        });
      }
    });
  }

}
