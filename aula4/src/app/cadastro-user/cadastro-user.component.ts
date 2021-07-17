import { Component, OnInit } from '@angular/core';
import { ServiceUserService } from '../service-user.service';

@Component({
  selector: 'app-cadastro-user',
  templateUrl: './cadastro-user.component.html',
  styleUrls: ['./cadastro-user.component.css']
})
export class CadastroUserComponent implements OnInit {
  getValues(data:any){
    this.user.save(data).subscribe( 
      resultado => {console.warn(resultado)},
      erro => {console.warn(erro)}   
    );
  }
  constructor(private user: ServiceUserService) { }

  ngOnInit(): void {
  }

}
