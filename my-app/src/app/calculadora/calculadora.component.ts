import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  resultado = 0;
  somar(n1: any, n2:any){
    this.resultado =  parseInt(n1) + parseInt(n2);
  }
  
}
