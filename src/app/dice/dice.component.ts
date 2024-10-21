import { Component } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent {
  num1:number=0;
  result:number=0;
  dice(){
   const rndInt=Math.floor(Math.random()*6)+1;
   this.result=this.num1=rndInt;
  

  }

}
