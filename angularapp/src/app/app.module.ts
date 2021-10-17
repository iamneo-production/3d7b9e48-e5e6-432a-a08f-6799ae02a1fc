import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ResourceComponent } from './components/resource/resource.component';
import { Resource1Component } from './components/resource/resource1/resource1.component';
import { Resource2Component } from './components/resource/resource2/resource2.component';
import { Resource3Component } from './components/resource/resource3/resource3.component';
import { Resource4Component } from './components/resource/resource4/resource4.component';
import { Resource5Component } from './components/resource/resource5/resource5.component';
import { Resource6Component } from './components/resource/resource6/resource6.component';



@NgModule({
  declarations: [
    AppComponent,
    
    LoginComponent,
    
    SignupComponent,
    
    ResourceComponent,
    
    Resource1Component,
    
    Resource2Component,
    
    Resource3Component,
    
    Resource4Component,
    
    Resource5Component,
    
    Resource6Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
