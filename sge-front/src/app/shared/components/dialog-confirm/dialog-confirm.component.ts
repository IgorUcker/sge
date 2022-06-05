import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogConfirmActions, DialogConfirmMessage } from './dialog-confirm.service';

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.scss']
})
export class DialogConfirmComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {message: DialogConfirmMessage, actions: DialogConfirmActions[]}
  ) { }

  ngOnInit(): void {
  }

  executeAction(value: any): void {
    this.dialogRef.close(value);
  }

}
