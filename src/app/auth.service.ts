import { Injectable } from '@angular/core';
import { Observable,of, Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { user } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  Authenticated:Observable<boolean>;
  value:Subject<boolean>;

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient ) { 
    this.value=new Subject<boolean>();
    this.Authenticated= this.value.asObservable();
  }

  login( user):Observable<any>{
    return this.http.post<any>("http://localhost:8084/login",user,{headers: this.httpOptions.headers, observe: "response"});
  }

  /*logout():any{
    return this.http.get<any>("http://localhost:8084/logout")
  }*/

  

  Auth():void{
    this.value.next(true);
  }
}
