import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GoogleUserInfoFormComponent } from './google-user-info-form/google-user-info-form.component';
import { FacebookUserInfoFormComponent } from './facebook-user-info-form/facebook-user-info-form.component';
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
  path     : 'pages/facebook-UserInfo-Form',
  component: FacebookUserInfoFormComponent
}];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent, GoogleUserInfoFormComponent, FacebookUserInfoFormComponent]
})
export class PagesModule { }
