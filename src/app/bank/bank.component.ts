import { Component } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent {

  bank:any=[];
  term:string="";
  column:string="";
  order:string="";
  page:number=1;
  constructor(private _bankservice:BankService){
    _bankservice.getbank().subscribe(
    (data:any)=>{
      this.bank=data;
    },
    (error:any)=>{
      alert("Internal Server Error")
    }
  )
  
  }
  search(){
    this._bankservice.getfilteredbank(this.term).subscribe(
      (data:any)=>{
        this.bank=data;
      },
      (err:any)=>{
        alert(err.error);
      }
    )
  }
  sort(){
    this._bankservice.getsortedbank(this.column,this.order).subscribe(
      (data:any)=>{
        this.bank=data;
      },
      (err:any)=>{
        alert("err.error");
      }
    )
  }
  pagination(){
    this._bankservice.getpagedbank(this.page).subscribe(
      (data:any)=>{
        this.bank=data;
      },
      (err:any)=>{
      console.log("Internal Server error");
      }
    )
  }

  delete(id:string){
    this._bankservice.deletebank(id).subscribe(
      (data:any)=>{
        alert("deleted successfully");
        location.reload();
      },
      (err:any)=>{
         alert(err.error);
      }

    )
  }


}
