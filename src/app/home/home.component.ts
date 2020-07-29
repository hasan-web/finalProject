import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private UserService:UsersService,private router:Router) { }

  ngOnInit() {
  }
  logOut(){
    sessionStorage.removeItem('token')
    this.UserService.logOut()
    this.router.navigate(['/login'])
  }
}
