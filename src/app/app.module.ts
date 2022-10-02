import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { HomeComponent } from './home/home.component';
import { DDDComponent } from './ddd/ddd.component';
import { DatabinddemoComponent } from './databinddemo/databinddemo.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { SqrPipe } from './sqr.pipe';
import { CubePipe } from './cube.pipe';
import { DirectivedemoComponent } from './directivedemo/directivedemo.component';
import { XComponent } from './x/x.component';
import { YComponent } from './y/y.component';
import { ZComponent } from './z/z.component';
import { ServiceDemoComponent } from './service-demo/service-demo.component';
import { FormsdemoComponent } from './formsdemo/formsdemo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttprecordsComponent } from './httprecords/httprecords.component';
import {  HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AComponent,
    BComponent,
    HomeComponent,
    DDDComponent,
    DatabinddemoComponent,
    PipedemoComponent,
    SqrPipe,
    CubePipe,
    DirectivedemoComponent,
    XComponent,
    YComponent,
    ZComponent,
    ServiceDemoComponent,
    FormsdemoComponent,
    HttprecordsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
