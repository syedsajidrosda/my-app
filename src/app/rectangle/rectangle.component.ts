import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {
  
leng:number=0;
bread:number=0;
result:number=0;
area(){
  this.result=this.leng*this.bread;
}
perimeter(){
  this.result=2*(this.leng+this.bread);
}
}
