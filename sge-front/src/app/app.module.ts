import localePt from '@angular/common/locales/pt';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {
    path: 'sge',
    loadChildren: () => import('./sge/sge.module').then(m => m.SgeModule),
  },
];

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,

    RouterModule.forRoot(routes)

  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'} // replace "en-US" with your locale,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
