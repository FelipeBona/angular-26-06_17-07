import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent  {

  listaUsers:any;
  constructor(private users:UserService){
      this.users.getData().subscribe( data => {
        console.warn(data);
        this.listaUsers = data;
      })     
  }

}
