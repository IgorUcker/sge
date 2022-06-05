import { FormaPagamento } from './../../model/tenancy/forma-pagamento';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormaPagamentoService {

  constructor(
    private _http: HttpClient
  ) { }

  public findAll(): Observable<FormaPagamento[]> {
    return this._http.get<FormaPagamento[]>(environment.baseUrl + '/sge/cadastros/forma-pagamento');
  }

  public save(formaPagamento: FormaPagamento): Observable<any> {
    return this._http.put(environment.baseUrl + '/sge/cadastros/forma-pagamento', formaPagamento);
  }

  public byId(id: number): Observable<FormaPagamento> {
    return this._http.get<FormaPagamento>(`${environment.baseUrl}/sge/cadastros/forma-pagamento/${id}`);
  }

  public delete(id: number): Observable<any> {
    return this._http.delete(`${environment.baseUrl}/sge/cadastros/forma-pagamento/${id}`);
  }
}
