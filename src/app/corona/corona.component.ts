import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';
@Component({
  selector: 'app-corona',
  templateUrl: './corona.component.html',
  styleUrls: ['./corona.component.css']
})
export class CoronaComponent implements OnInit {
  info:any =null;
  countries: any = null;
  searchCountry: any;
  constructor(private covidservice:CovidService) { }

  ngOnInit() {
   this.getAll()
   this.getCountries()
  }
  getAll(){
    this.covidservice.getAll().subscribe((data)=>{
      this.info = data;
  })
  }
getCountries(){
  this.covidservice.getCountries().subscribe((data)=>{
      this.countries = data;
  })
}
}
