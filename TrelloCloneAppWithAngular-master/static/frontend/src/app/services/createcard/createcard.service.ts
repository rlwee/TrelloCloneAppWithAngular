import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CreatecardService {
  createCardUrl:string = '/api/cards/';

  constructor(private http:HttpClient) { }

  createCard(cardTitle, list): Observable<any>{
    console.log(list,"list id testing")
    let card = {title:cardTitle, trello_list:list.id}
    return this.http.post(this.createCardUrl, card)
  }

}
