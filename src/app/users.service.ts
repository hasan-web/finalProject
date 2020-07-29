import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { People } from './people';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
_url='http://localhost:3000/enroll'
  constructor(private http:HttpClient) { }
  enroll(user:People){
  return this.http.post<any>(this._url,user)
  .pipe(catchError(this.errorHandler))
}
errorHandler(error:HttpErrorResponse){
  return throwError(error)
}
logOut(){
  return localStorage.removeItem('token')
}
}


