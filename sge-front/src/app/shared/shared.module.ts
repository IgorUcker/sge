import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';

import {DialogConfirmComponent } from './components/dialog-confirm/dialog-confirm.component';
import {DialogConfirmService} from './components/dialog-confirm/dialog-confirm.service';

// import {GenMaskDirective} from './directives/gen-mask.directive';
// import {GenMaskMoneyDirective} from './directives/gen-mask-money.directive';


@NgModule({
  declarations: [
    DialogConfirmComponent,
    // GenMaskDirective,
    // GenMaskMoneyDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    // material imports
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatTabsModule,
    MatCardModule
    // material imports
  ],
  entryComponents: [DialogConfirmComponent],
  providers: [
    DialogConfirmService,
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 3000, verticalPosition: 'top'}},
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    // GenMaskDirective,
    // GenMaskMoneyDirective,

    // material exports
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatDialogModule,
    DialogConfirmComponent,
    MatTooltipModule,
    MatTabsModule,
    MatCardModule
    // material exports
  ]
})
export class SharedModule { }
