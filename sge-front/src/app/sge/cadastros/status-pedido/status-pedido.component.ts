import { HttpErrorResponse } from '@angular/common/http';
import { Conf } from './../../../shared/model/conf';
import { StatusPedidoService } from './../../../http-server/sgc-http/status-pedido.service';
import { DialogConfirmService } from './../../../shared/components/dialog-confirm/dialog-confirm.service';
import { MatSnackUtilsService } from './../../../shared/service/mat-snack-utils.service';
import { Router } from '@angular/router';
import { MatTableHeaders } from './../../../shared/model/md-table-utils';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { StatusPedido } from './../../../model/tenancy/status-pedido';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-status-pedido',
  templateUrl: './status-pedido.component.html',
  styles: [
  ]
})
export class StatusPedidoComponent implements OnInit {

  selecionado = new SelectionModel<StatusPedido>(false);
  dataSource: MatTableDataSource<StatusPedido>;
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
    private _statusPedidoServ: StatusPedidoService
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
    this._statusPedidoServ.findAll().subscribe(grupos => {
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
    this._router.navigate(['/sge/cadastros/status-pedido/cadastro']);
  }

  editar(row?: StatusPedido): void {
    if (row) {
      this._router.navigate(['/sge/cadastros/status-pedido/cadastro/' + row.id]);
    } else {
      this._router.navigate(['/sge/cadastros/status-pedido/cadastro/' + (<any> this.selecionado.selected[0]).id]);
    }
  }

  excluir(): void {
    this._dialogConfirm.confirm({message: '<b>Deseja excluir ?</b>'}).subscribe(result => {
      if (result === 's') {
        this._statusPedidoServ.delete((<any> this.selecionado.selected[0]).id).subscribe(res => {
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
