import { HttpParams } from "@angular/common/http";
import * as moment from "moment";

export class HttpParamsUtils {

  private _params = new HttpParams();

  public set(key: string, value: string | number | Date | moment.Moment, onlyValidValue = true): HttpParamsUtils {
    if (onlyValidValue && this.isValidValue(value)) {
      if (moment.isMoment(value) || value instanceof Date) {
        this._params = this._params.set(key, value.toJSON());
      } else {
        this._params = this._params.set(key, '' + value);
      }
    }
    return this;
  }

  public setAny(values: { [key: string]: any }): void {
    for (const key in values) {
      if (values[key] instanceof Array) {
        for (const i in values[key]) {
          this.set(key + '[' + i + ']', values[key][i]);
        }
      } else if (values[key] instanceof Object && !(values[key] instanceof moment) && !(values[key] instanceof Date)) {
        for (const i in values[key]) {
          this.set(`${key}.${i}`, values[key][i]);
        }
      } else {
        this.set(key, values[key]);
      }
    }
  }

  public isValidValue(value: any): boolean {
    return !(value === '' || value == null || value === undefined);
  }

  public toString(): string {
    return this._params.toString();
  }

  get params(): HttpParams {
    return this._params;
  }

}
