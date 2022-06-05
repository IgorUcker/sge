import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MatSnackUtilsService {

  constructor(
    private _snackBar: MatSnackBar,
  ) { }


  public messageSaved(): void {
    this._snackBar.open('Salvo!', '', {
      panelClass: 'success'
    });
  }

  public messageDeleted(): void {
    this._snackBar.open('Excluído!', '', {
      panelClass: 'success'
    });
  }

  public message(message: string): void {
    this._snackBar.open(message, '', {
      panelClass: 'success'
    });
  }

  public messageError(message: string): void {
    this._snackBar.open(message, '', {
      panelClass: 'error'
    });
  }
}
