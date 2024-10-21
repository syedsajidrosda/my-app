import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {

  public VehicleForm: FormGroup=new FormGroup({
    Vehicle: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl(),
    image: new FormControl(),
    cost: new FormControl(),
  }

);

constructor(private _vehicleService: VehicleService){}

  submit(){
    console.log(this.VehicleForm.value);
    this._vehicleService.createvehicle(this.VehicleForm.value).subscribe(
      (data:any)=>{
        alert("Created succesfully!!!");
      },
      (err:any)=>{
        alert(err.error);
      }
    )
  }
  

}
