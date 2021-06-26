import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  password = '';

  setUsername(user:any){
    this.username = user;
  }

  setPassword(senha:any){
    this.password = senha;
  }

}
