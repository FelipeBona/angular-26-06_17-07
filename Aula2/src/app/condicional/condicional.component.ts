import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condicional',
  templateUrl: './condicional.component.html',
  styleUrls: ['./condicional.component.css']
})
export class CondicionalComponent  {
  show=true;
  showString='no';

  setShow(){
    this.show = !this.show;
  }

  setShowString(){
    if (this.showString=='yes')
       this.showString='no'
    else
       this.showString='yes';   
  }

}
