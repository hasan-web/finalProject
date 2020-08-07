import { Component, OnInit } from '@angular/core';
import { MyDataServiceService } from '../../Services/my-data-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Employee from '../../../../../nodeback/model/employee';

@Component({
 selector: 'app-edit-employee',
 templateUrl: './edit-employee.component.html',
})
export class EditEmployeeComponent implements OnInit {

 empid: string;
 employeeDetail: Employee;
 frmGroup: FormGroup;

 constructor(private service: MyDataServiceService, private formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) {
 this.activatedRoute.params.subscribe(params => {
 this.empid = params.id;
 });
 this.initializeForm();
 }

 ngOnInit() {
 this.getEmployeeById(this.empid);
 this.updateEmployee();
 }

 // To Initialize Form
 initializeForm() {
 this.frmGroup = this.formBuilder.group({
 firstName: ['', [Validators.required]],
 lastName: ['', [Validators.required]],
 Gender:['',[Validators.required]],
 Address:['',[Validators.required]],
 country:['',[Validators.required]],
 status:['',[Validators.required]]
 });
 return this.frmGroup;
 }

 // To Single Employee Details By ID
 getEmployeeById(empid) {
 this.service.getEmployeeById(empid).subscribe(res => {
 this.employeeDetail = res;
 this.frmGroup.patchValue({
 firstName: this.employeeDetail.firstName,
 lastName: this.employeeDetail.lastName,
 Address: this.employeeDetail.Address,
 country: this.employeeDetail.country,
 status: this.employeeDetail.status,
 });
 });
 }

 // To Update Employee Detail
 updateEmployee() {
 if (this.frmGroup.valid) {
 let data = JSON.stringify(this.frmGroup.value);
 this.service.updateEmployee(this.empid, data).subscribe(() => {
  this.router.navigate(['meanstack/list']);
 });
 }
 }

}
