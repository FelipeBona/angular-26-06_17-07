import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edita-user',
  templateUrl: './edita-user.component.html',
  styleUrls: ['./edita-user.component.css']
})
export class EditaUserComponent  {

  constructor(private user: UserService) { }
  
  userRet:any;
  getOne(idUser:any){
    this.user.getOne(idUser).subscribe(data => {
      this.userRet = data;
    })
  }

}
