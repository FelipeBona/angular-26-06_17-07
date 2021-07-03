import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { CondicionalComponent } from './condicional/condicional.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [
  {
    path:'condicional',
    component:CondicionalComponent
  }
  ,
  {
    path:'cadastro',
    component:CadastroComponent
  },
  {
    path:'consulta',
    component:ConsultaComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ConsultaComponent,
    CondicionalComponent,
    CadastroComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    ),
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
