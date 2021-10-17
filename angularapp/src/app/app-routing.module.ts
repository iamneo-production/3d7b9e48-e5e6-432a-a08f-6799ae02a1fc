import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ResourceComponent } from './components/resource/resource.component';
import { Resource1Component } from './components/resource/resource1/resource1.component';
import { Resource2Component } from './components/resource/resource2/resource2.component';
import { Resource3Component } from './components/resource/resource3/resource3.component';
import { Resource4Component } from './components/resource/resource4/resource4.component';
import { Resource5Component } from './components/resource/resource5/resource5.component';
import { Resource6Component } from './components/resource/resource6/resource6.component';




const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'resource',component:ResourceComponent},
  {path:'resource1',component:Resource1Component},
  {path:'resource2',component:Resource2Component},
  {path:'resource3',component:Resource3Component},
  {path:'resource4',component:Resource4Component},
  {path:'resource5',component:Resource5Component},
  {path:'resource6',component:Resource6Component},
  {path:'',redirectTo:'/login',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
