import { environment } from './../../../environments/environment';
import { HttpParamsUtils } from './../../shared/utils/http-params-utils';
import { Produto } from './../../model/tenancy/produto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(
    private _http: HttpClient
  ) { }

  public buscar(filter: any): Observable<any> {
    const params = new HttpParamsUtils();
    params.setAny(filter);
    return this._http.get(environment.baseUrl + '/sge/cadastros/produto', {params: params.params});
  }
  public save(produto: Produto): Observable<any> {
    return this._http.put(environment.baseUrl + '/sge/cadastros/produto', produto);
  }

  public byId(id: number): Observable<Produto> {
    return this._http.get<Produto>(`${environment.baseUrl}/sge/cadastros/produto/${id}`);
  }

  public delete(id: number): Observable<any> {
    return this._http.delete(`${environment.baseUrl}/sge/cadastros/produto/${id}`);
  }

}
