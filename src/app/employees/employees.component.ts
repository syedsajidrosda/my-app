import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent {


name:string="";
experience:number=0;
package:number=0;
role:string="";

  employees = [
    { name: 'sandeep', experience: 4, package: 1200000, role: 'UIDeveloper' },
    { name: 'amar', experience: 5, package: 1300000, role: 'UIDeveloper' },
]
delete(i:number){
  this.employees.splice(i,1)
}
create(){
  let employee={
    name:this.name,
     experience:this.experience,
     package:this.package,
     role:this.role,
  }
}


}

