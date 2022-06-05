import { MatSnackUtilsService } from './../../../shared/service/mat-snack-utils.service';
import { DialogConfirmService } from './../../../shared/components/dialog-confirm/dialog-confirm.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Conf } from './../../../shared/model/conf';
import { MatTableHeaders } from './../../../shared/model/md-table-utils';
import { UnidadeMedidaService } from './../../../http-server/sgc-http/unidade-medida.service';
import { UnidadeMedida } from './../../../model/tenancy/unidade-medida';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-unidade-medida',
  templateUrl: './unidade-medida.component.html',
  styles: [
  ]
})
export class UnidadeMedidaComponent implements OnInit {

  selecionado = new SelectionModel<UnidadeMedida>(false);
  dataSource: MatTableDataSource<UnidadeMedida>;
  falhaCarregarComponente: string;
  displayedColumns: string[];
  resultsLength: number;

  headers: MatTableHeaders[];
  loading: boolean;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(
    private _router: Router,
    private _snack: MatSnackUtilsService,
    private _dialogConfirm: DialogConfirmService,
    private _unidadeMedidaServ: UnidadeMedidaService
  ) { }

  ngOnInit(): void {
    this.headers = [
      {field: 'id', header: 'Cód.', class: 'w-2'},
      {field: 'nome', header: 'Nome', class: 'w-10'},
    ];

    this.displayedColumns = this.headers.map(d => d.field);

    this.buscar();
  }

  aplicarFiltro(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public buscar(): void {
    this.loading = true;
    this._unidadeMedidaServ.findAll().subscribe(grupos => {
      this.dataSource = new MatTableDataSource(grupos);

      this.paginator.pageSize = Conf.table.rows;
      this.paginator.pageSizeOptions = Conf.table.rowsPerPageOptions;
      this.paginator.showFirstLastButtons = Conf.table.showFirstLastButtons;

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    }, (err) => {
      this.falhaCarregarComponente = 'Falha ao carregar os dados!';
    }, () => this.loading = false);
  }

  cadastrar(): void {
    this._router.navigate(['/sge/cadastros/unidade-medida/cadastro']);
  }

  editar(row?: UnidadeMedida): void {
    if (row) {
      this._router.navigate(['/sge/cadastros/unidade-medida/cadastro/' + row.id]);
    } else {
      this._router.navigate(['/sge/cadastros/unidade-medida/cadastro/' + (<any> this.selecionado.selected[0]).id]);
    }
  }

  excluir(): void {
    this._dialogConfirm.confirm({message: '<b>Deseja excluir ?</b>'}).subscribe(result => {
      if (result === 's') {
        this._unidadeMedidaServ.delete((<any> this.selecionado.selected[0]).id).subscribe(res => {
          this._snack.messageDeleted();
          this.selecionado.clear();
          this.buscar();
        }, (err: HttpErrorResponse) => {
          err.error.errors.forEach();
          this.buscar();
        });
      }
    });
  }

}
