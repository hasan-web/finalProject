import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MyDataServiceService } from '../../Services/my-data-service.service';
import { FormGroup,Validators, FormBuilder } from '@angular/forms';
export interface Employee {
  firstName: string;
  lastName: string;
  Gender: string;
  Address: string;
  Status:string;
 }

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  formGroup:FormGroup;
  // Important objects
  MyDataSource: any;
  employeeList: Employee[];
  displayedColumns: string[] = ['firstName', 'lastName', 'Gender', 'Address','Status', 'action'];

  constructor(private service:MyDataServiceService,private router:Router,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.getEmployees()
    this.deleteEmployee(this.employeeList)
    this.filterEmployee
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
  getEmployees() {
    this.service
    .getEmployees()
    .subscribe((data: Employee[]) => {
    this.MyDataSource = new MatTableDataSource();
    this.MyDataSource.data = data;
    this.MyDataSource.paginator = this.paginator;
    this.MyDataSource.sort = this.sort;
    });
    }

    // To Edit Employee
    editEmployee(empid) {
    this.router.navigate(['meanstack/edit']);
    }

    // Search specific result
    filterEmployee(searchstring: string) {
    searchstring = searchstring.trim();
    searchstring = searchstring.toLowerCase();
    this.MyDataSource.filter = searchstring;
    }
    deleteEmployee(empid) {
      this.service.deleteEmployee(empid).subscribe(() => {
      this.getEmployees();
      });
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

