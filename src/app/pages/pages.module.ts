import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
const routes = [
{
    path     : 'pages/login',
    component: LoginComponent
}];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent]
})
export class PagesModule { }
