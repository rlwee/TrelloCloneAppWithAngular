import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, from } from 'rxjs'
import { Board } from '../../models/boards';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class BoarddetailService {
  board: Board[];

  detailUrl:string = '/api/boards/';
  createlistUrl:string = '/api/lists/';

  listUrl:string = 'lists/'

  csrfheaders = new HttpHeaders({'X-CSRFToken': this.cookieService.get('csrftoken')});
  constructor(private http:HttpClient, private cookieService:CookieService) { }

  boardDetail(boards:number): Observable<any> {
    let url = this.detailUrl + `${boards}/`
    console.log(url)
    return this.http.get(url)
  }

  createList(title, board):Observable<any>{
    let list = {title:title,board:board.id}
    let boards = board
    return this.http.post(this.createlistUrl, list)
  }


}
