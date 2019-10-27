import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CreateboardService {
  createUrl:string = '/api/boards/';
  httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  csrfheaders = new HttpHeaders({'X-CSRFToken': this.cookieService.get('csrftoken')});
  constructor(private http:HttpClient, private cookieService:CookieService) { }

  createBoard(title): Observable<any>{
    let board = {title:title}
    // console.log(board.title,'test')
    // return this.http.post(this.createUrl, board)
    console.log(title,'testestsetet')
    console.log(this.csrfheaders.keys, 'csrf')
    return this.http.post(this.createUrl, board ,{headers: this.csrfheaders})
  }

}
