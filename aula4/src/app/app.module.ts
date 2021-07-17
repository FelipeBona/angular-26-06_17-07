import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListUserComponent } from './list-user/list-user.component';
import { CadastroUserComponent } from './cadastro-user/cadastro-user.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {
    path: 'cadastrar',
    component: CadastroUserComponent
  },
  {
    path: 'consultar',
    component: ListUserComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    CadastroUserComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
