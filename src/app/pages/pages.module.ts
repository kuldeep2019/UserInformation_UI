import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {HttpModule} from '@angular/http'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { GoogleUserInfoFormComponent } from './google-user-info-form/google-user-info-form.component';
import { FacebookUserInfoFormComponent } from './facebook-user-info-form/facebook-user-info-form.component';
import { GoogleUserDetailsComponent } from './google-user-details/google-user-details.component';
const routes = [
{
    path     : 'pages/login',
    component: LoginComponent
},
{
  path     : 'pages/google-UserInfo-Form',
  component: GoogleUserInfoFormComponent
},
{
  path     : 'pages/google-UserDetails',
  component: GoogleUserDetailsComponent
},
{
  path     : 'pages/facebook-UserInfo-Form',
  component: FacebookUserInfoFormComponent
}];
@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent, GoogleUserInfoFormComponent, FacebookUserInfoFormComponent, GoogleUserDetailsComponent]
})
export class PagesModule { }
