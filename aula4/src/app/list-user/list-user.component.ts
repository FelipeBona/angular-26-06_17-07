import { Component, OnInit } from '@angular/core';
import { ServiceUserService} from '../service-user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: any;

  constructor(private user: ServiceUserService) {
    this.user.getData().subscribe( data =>{
      this.users = data;
    })
   }

  ngOnInit(): void {
  }

}
