import { Pessoa } from './../../model/tenancy/pessoa';
import { environment } from './../../../environments/environment';
import { HttpParamsUtils } from './../../shared/utils/http-params-utils';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(
    private _http: HttpClient
  ) { }

  public buscar(filter: any): Observable<any> {
    const params = new HttpParamsUtils();
    params.setAny(filter);
    return this._http.get(environment.baseUrl + '/sge/cadastros/pessoa', {params: params.params});
  }
  public save(pessoa: Pessoa): Observable<any> {
    return this._http.put(environment.baseUrl + '/sge/cadastros/pessoa', pessoa);
  }

  public byId(id: number): Observable<Pessoa> {
    return this._http.get<Pessoa>(`${environment.baseUrl}/sge/cadastros/pessoa/${id}`);
  }

  public delete(id: number): Observable<any> {
    return this._http.delete(`${environment.baseUrl}/sge/cadastros/pessoa/${id}`);
  }
}
