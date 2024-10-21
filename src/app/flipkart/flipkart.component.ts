import { Component } from '@angular/core';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {
  productname:string="";
  price:number=0;
  rating:number=0;
  deliverydate:any;
  freedelivery:boolean=true;
  products:any=[];

  submit(){
    let product={
      name:this.productname,
      price:this.price,
      rating:this.rating,
      deliverydate:this.deliverydate,
      freedelivery:this.freedelivery
    }
    this.products.push(product);
  }
  delete(i:number){
    this.products.splice(i,1);
  }

}

