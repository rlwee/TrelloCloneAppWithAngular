import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  // board/<int:board_id>/list/<int:list_id>/cards/

  constructor(private http:HttpClient,
              ) { }

  cardList(list_board, list_id):Observable<any>{
    let cardUrl = "/api/board/" + `${list_board}/list/${list_id}/cards/`
    return this.http.get(cardUrl)
  }

  
  
}
