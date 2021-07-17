import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

interface IUSer {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-edita-user',
  templateUrl: './edita-user.component.html',
  styleUrls: ['./edita-user.component.css']
})
export class EditaUserComponent  {

  constructor(private user: UserService) { }
   userRet: any;
   existeUser = false;
  getOne(idUser:any){
    this.user.getOne(idUser).subscribe(data => {
      this.userRet = data;      
    })
    this.existeUser = this.userRet != null;
  }

}
