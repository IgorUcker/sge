import { SharedModule } from 'src/app/shared/shared.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTreeModule} from '@angular/material/tree';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,

    MatToolbarModule,
    MatSidenavModule,
    MatTreeModule
  ]
})
export class MenusModule { }
