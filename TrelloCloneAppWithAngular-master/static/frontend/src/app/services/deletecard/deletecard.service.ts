import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeletecardService {


  constructor(private http:HttpClient) { }

  deletecard(card_id, card_list):Observable<any>{
    let url = `api/list/${card_list}/card/${card_id}/deleted/`
    return this.http.get(url)
  }

}
