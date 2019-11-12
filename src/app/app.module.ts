import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { MaterialModule } from './shared/material/material.module';
import { CovalentModule } from './shared/covalent/covalent.module';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { Login3Component } from './login3/login3.component';

import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { JwtInterceptor } from './infra/security';


@NgModule({
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    RxReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    JsonpModule,
    MaterialModule,
    CovalentModule,
    RxReactiveFormsModule,
    LoadingBarHttpClientModule,
    routing
  ],

  declarations: [ 
    AppComponent, Login3Component
  ],

  providers:[
    JwtInterceptor,
    {
      /// iterceptar requisioes http e colocar token
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],

  bootstrap:    [ 
    AppComponent 
  ]
})
export class AppModule { 
}