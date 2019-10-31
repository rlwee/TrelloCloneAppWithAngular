import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CreateuserService {

  constructor(private http:HttpClient) { }


createUser(username, email, password):Observable<any>{
  let url = '/api/users/signup/'
  let user = {username:username, email:email, password:password  }
  return this.http.post(url, user)
}




}
