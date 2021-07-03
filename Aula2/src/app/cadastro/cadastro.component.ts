import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent  {

   getValues(data:any){
     console.warn(data);
  }
  
  contatos = [
    {
      nome:'Vilson',
      idade: 45,
      email: 'vilson@gmail.com'
    }
    ,
    {
      nome:'Ana',
      idade: 15,
      email: 'ana@gmail.com'
    },
    {
      nome:'Pedro',
      idade: 35,
      email: 'pedro@gmail.com'
    },
    {
      nome:'Antonio',
      idade: 55,
      email: 'antonio@gmail.com'
    }
  ]

}
