import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MyDataServiceService } from '../../services/my-data-service.service';
interface Gender {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
 formGroup:FormGroup
 Gender: Gender[] = [
  {value: 'Male', viewValue: 'Male'},
  {value: 'Female', viewValue: 'Female'},
  {value: 'Others', viewValue: 'Others'}
];

  constructor(private formBuilder:FormBuilder,private service:MyDataServiceService,private router:Router) {
    this.initializeForm()
    this.Gender;
   }

  ngOnInit() {
    this.initializeForm()
    this.addEmployee()
  }
initializeForm(){
  this.formGroup = this.formBuilder.group({
    firstName:['',[Validators.required]],
    lastName:['',[Validators.required]],
    Gender:['',[Validators.required]],
    Address:['',[Validators.required]],
    country:['',[Validators.required]],
    status:['',[Validators.required]]
  })
  return this.formGroup;
}
addEmployee(){
  if(this.formGroup.valid){
    let data=this.formGroup.value;
    this.service.addEmployee(data).subscribe(()=>{
      this.router.navigate(['meanstack/list'])
    })
  }
}
}
