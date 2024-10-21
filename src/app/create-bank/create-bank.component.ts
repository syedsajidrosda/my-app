import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-create-bank',
  templateUrl: './create-bank.component.html',
  styleUrls: ['./create-bank.component.css']
})
export class CreateBankComponent {

  public Bankform: FormGroup=new FormGroup({
    account_name:new FormControl(),
    available_balance:new FormControl(),
    account_number:new FormControl(),
    city: new FormControl(),
    profie_picture:new FormControl,
    id: new FormControl(),
  }

  );

  constructor(private _bankService:BankService){}

  submit(){
    console.log(this.Bankform.value);
    this._bankService.createbank(this.Bankform.value).subscribe(
      (data:any)=>{
        alert("created successfully!!!");
      },
      (err:any)=>{
        alert(err.error);
      }
    )
  }

}
