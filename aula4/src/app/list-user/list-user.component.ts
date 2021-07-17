import { Component, OnInit } from '@angular/core';
import { ServiceUserService} from '../service-user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: any;

  excluir(id:any){
    this.user.excluir(id).subscribe(
      resultado => {console.warn(resultado)},
      erro => {console.warn(erro)} 
    );
  }

  constructor(private user: ServiceUserService) {
    this.user.getData().subscribe( data =>{
      this.users = data;
    })
   }

  ngOnInit(): void {
  }

}
