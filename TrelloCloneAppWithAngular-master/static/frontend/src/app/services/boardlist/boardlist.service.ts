import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})


export class BoardlistService {
  listsURL:string = 'api/boards/'

  constructor(private http:HttpClient) { }

  displayLists(board_id:number):Observable<any>{
    let url = this.listsURL + `${board_id}/lists/`
    return this.http.get(url)
  }
  
}
