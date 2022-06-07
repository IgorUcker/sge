import { merge, startWith, switchMap, catchError, of, map, debounceTime, distinctUntilChanged } from 'rxjs';
import { CidadeService } from './../../../http-server/sgc-http/cidade.service';
import { DialogConfirmService } from './../../../shared/components/dialog-confirm/dialog-confirm.service';
import { MatSnackUtilsService } from './../../../shared/service/mat-snack-utils.service';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { FormGroup, FormControl } from '@angular/forms';
import { Cidade } from './../../../model/tenancy/cidade';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, AfterViewInit, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styles: [
  ]
})
export class CidadeComponent implements OnInit, AfterViewInit {

  falhaCarregarComponente: string;
  data: any[];
  selecionado = new SelectionModel<Cidade>(false);
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
    private _cidadeServ: CidadeService,
  ) { }

  ngOnInit(): void {
    this.headers = [
      {field: 'codCidade', header: 'Código', class: 'w-5'},
      {field: 'nome', header: 'Nome', class: 'w-5'},
      {field: 'estado', header: 'Estado', class: 'w-5'},
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

          return this._cidadeServ.buscar(filter);
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

}
