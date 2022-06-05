import { Veiculo } from './../../model/tenancy/veiculo';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  constructor(
    private _http: HttpClient
  ) { }

  public findAll(): Observable<Veiculo[]> {
    return this._http.get<Veiculo[]>(environment.baseUrl + '/sge/cadastros/veiculo');
  }

  public save(veiculo: Veiculo): Observable<any> {
    return this._http.put(environment.baseUrl + '/sge/cadastros/veiculo', veiculo);
  }

  public byId(id: number): Observable<Veiculo> {
    return this._http.get<Veiculo>(`${environment.baseUrl}/sge/cadastros/veiculo/${id}`);
  }

  public delete(id: number): Observable<any> {
    return this._http.delete(`${environment.baseUrl}/sge/cadastros/veiculo/${id}`);
  }
}
