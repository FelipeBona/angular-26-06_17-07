import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listaUsers:any;
  constructor(private users:UserService){
      this.users.getData().subscribe( data => {
        this.listaUsers = data;
      })
  }
}
