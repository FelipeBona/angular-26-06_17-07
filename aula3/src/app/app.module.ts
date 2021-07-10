import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule, Routes } from '@angular/router';
import { EditaUserComponent } from './edita-user/edita-user.component';

const appRoutes: Routes = [
  {
    path: 'listar',
    component: UserListComponent
  },
  {
    path:'listarOne',
    component:EditaUserComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    EditaUserComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    ),
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
