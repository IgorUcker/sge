import { DialogConfirmComponent } from './dialog-confirm.component';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

export interface DialogConfirmMessage {
  title?: string;
  message?: string;
}

export interface DialogConfirmActions {
  label: string;
  value: any;
  color: 'primary' | 'accent' | 'warn';
}

@Injectable({
  providedIn: 'root'
})
export class DialogConfirmService {

  constructor(
    private dialog: MatDialog
  ) { }

  public confirm(
    message: DialogConfirmMessage,
    actions: DialogConfirmActions[] = [
      {label: 'Sim', value: 's', color: 'primary'},
      {label: 'Não', value: 'n', color: 'primary'}
    ]): Observable<any> {
    return this.dialog.open(DialogConfirmComponent, {
      minWidth: '35%',
      data: {
        message: message,
        actions: actions
      }
    }).afterClosed();
  }
}
