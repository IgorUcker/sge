import { StatusPedido } from './../../model/tenancy/status-pedido';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusPedidoService {

  constructor(
    private _http: HttpClient
  ) { }

  public findAll(): Observable<StatusPedido[]> {
    return this._http.get<StatusPedido[]>(environment.baseUrl + '/sge/cadastros/status-pedido');
  }

  public save(statusPedido: StatusPedido): Observable<any> {
    return this._http.put(environment.baseUrl + '/sge/cadastros/status-pedido', statusPedido);
  }

  public byId(id: number): Observable<StatusPedido> {
    return this._http.get<StatusPedido>(`${environment.baseUrl}/sge/cadastros/status-pedido/${id}`);
  }

  public delete(id: number): Observable<any> {
    return this._http.delete(`${environment.baseUrl}/sge/cadastros/status-pedido/${id}`);
  }
}
