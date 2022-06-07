import { environment } from './../../../environments/environment';
import { HttpParamsUtils } from './../../shared/utils/http-params-utils';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  constructor(
    private _http: HttpClient
  ) { }

  public buscar(filter: any): Observable<any> {
    const params = new HttpParamsUtils();
    params.setAny(filter);
    return this._http.get(environment.baseUrl + '/sge/cadastros/cidade', {params: params.params});
  }
}
