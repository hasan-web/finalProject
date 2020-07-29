import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form';
  constructor(private UserService:UsersService,private router:Router){
    }

  }
