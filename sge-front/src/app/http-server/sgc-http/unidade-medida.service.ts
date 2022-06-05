import { UnidadeMedida } from './../../model/tenancy/unidade-medida';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnidadeMedidaService {

  constructor(
    private _http: HttpClient
  ) {
  }

  public findAll(): Observable<UnidadeMedida[]> {
    return this._http.get<UnidadeMedida[]>(environment.baseUrl + '/sge/cadastros/unidade-medida');
  }

  public save(unidadeMedida: UnidadeMedida): Observable<any> {
    return this._http.put(environment.baseUrl + '/sge/cadastros/unidade-medida', unidadeMedida);
  }

  public byId(id: number): Observable<UnidadeMedida> {
    return this._http.get<UnidadeMedida>(`${environment.baseUrl}/sge/cadastros/unidade-medida/${id}`);
  }

  public delete(id: number): Observable<any> {
    return this._http.delete(`${environment.baseUrl}/sge/cadastros/unidade-medida/${id}`);
  }
}
