import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  public userform:FormGroup=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    age:new FormControl('',[Validators.required,Validators.min(1),Validators.max(8)]),
    phone:new FormControl('',[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.pattern('^(?=.[a-z])(?=.[A-Z])(?=.\\d)(?=.[@$!%?&])[A-Za-z\\d@$!%?&]{8,}$')]),

    address:new FormGroup({
    city:new FormControl('',[Validators.required]),
    pin:new FormControl()
  }),
  type:new FormControl(),
  busfee:new FormControl(),
  hostelfee:new FormControl(),

  cards:new FormArray([])
  
  })

  get cardsFormArray(){
    return this.userform.get('cards')as FormArray;

  }
  addcard(){
    this.cardsFormArray.push(
      new FormGroup({
        number:new FormControl('',[Validators.required]),
        expiry:new FormControl(),
        cvv:new FormControl(),
      })
    )
  }
  delete(i:number){
    this.cardsFormArray.removeAt(i);

  }
  constructor(){
    this.userform.get('type')?.valueChanges.subscribe(
      (data:any)=>{
        if(data=='dayscholor'){
          this.userform.addControl('busfee',new FormControl());
          this.userform.removeControl('hostelfee');
        }
        else{
          this.userform.addControl('hostelfee',new FormControl());
          this.userform.removeControl('busfee')
        }
      }
    )
  }
  submit(){
    this.userform.markAsTouched();
    console.log(this.userform.value);
  }

}
