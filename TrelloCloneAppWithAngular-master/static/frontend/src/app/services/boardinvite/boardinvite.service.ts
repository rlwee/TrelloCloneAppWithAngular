import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardinviteService {

  constructor(private http:HttpClient) { }

  inviteMember(emails, board): Observable<any>{
    let url = `/api/boards/${board}/invite/`
    let email =  {email:emails, board:board}
    console.log(emails, board, "teststsetasetsetseat")
    return this.http.post(url, email)
  }

}
