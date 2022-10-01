import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { DatabinddemoComponent } from './databinddemo/databinddemo.component';
import { DirectivedemoComponent } from './directivedemo/directivedemo.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { RegisterComponent } from './register/register.component';
import { ServiceDemoComponent } from './service-demo/service-demo.component';

const routes: Routes = [
{path :'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'acomp',component:AComponent},
{ path : 'bcomp', component : BComponent},
{ path : 'home',component :HomeComponent},
{ path :'data',component:DatabinddemoComponent},
{path :'pipe',component:PipedemoComponent},
{path:'directive',component:DirectivedemoComponent},
{path:'service',component:ServiceDemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
