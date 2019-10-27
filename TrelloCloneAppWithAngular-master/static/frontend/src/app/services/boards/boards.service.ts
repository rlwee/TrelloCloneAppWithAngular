import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BoardsService {
  boardsUrl:string = 'http://127.0.0.1:8000/api/boards/';

  constructor(private http:HttpClient) { }

  boardList(): Observable<any> {
    console.log('test')
    return this.http.get(this.boardsUrl)
  }

}
