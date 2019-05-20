import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  register(userData:any){
    return this.http.post<any>('http://tlali.xyz/api/register',userData);
   }
 
   login(userData:any){
     return this.http.post<any>('http://tlali.xyz/api/login',userData);
   }

}
