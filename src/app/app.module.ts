import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const appRoutes =[
  {
    path: "",
    redirectTo: "/pages/pages/login",
    pathMatch: "full"
  },
  {
    path: "pages",
    loadChildren: "./pages/pages.module#PagesModule"
  }
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
