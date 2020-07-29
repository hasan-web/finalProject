import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { People } from '../people';
import { Router } from '@angular/router';
@Component({ templateUrl: 'user.component.html' })
export class UserComponent implements OnInit {
   userModel=new People('','','')
   submitted=false;
   errorMsg='';
    constructor(private userService:UsersService, private router:Router) { }

    ngOnInit() {
           }
onSubmit(){
  this.submitted=true;
this.userService.enroll(this.userModel).subscribe(
  data =>{ console.log("success!",data),
  localStorage.setItem('token',data.token)
  sessionStorage.setItem('token',data.token)
  this.router.navigate(['/home'])
},
  error => this.errorMsg = error.statusText
)

}
          }
