import { Component, OnInit } from '@angular/core';
import { Injectable, } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidService implements OnInit{
  apiUrl = 'https://coronavirus-19-api.herokuapp.com/';

  constructor(private http:HttpClient) { }
  ngOnInit() {
    this.getAll()
    this.getCountries()
   }
  getAll() {
    return this.http.get(`${this.apiUrl}all`, );
  }

  getCountries() {
    return this.http.get(`${this.apiUrl}countries`);
  }

}
