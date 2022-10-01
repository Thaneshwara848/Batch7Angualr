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
    DirectivedemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
