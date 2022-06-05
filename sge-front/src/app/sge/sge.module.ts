import { MatDividerModule } from '@angular/material/divider';
import { MatTreeModule } from '@angular/material/tree';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

const sgeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: 'cadastros', loadChildren: () => import('./cadastros/cadastros.module').then(m => m.CadastrosModule)},
    ]
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,


    MatSidenavModule,
    MatToolbarModule ,
    MatTreeModule,
    MatDividerModule,

    RouterModule.forChild(sgeRoutes)
  ]
})
export class SgeModule { }
