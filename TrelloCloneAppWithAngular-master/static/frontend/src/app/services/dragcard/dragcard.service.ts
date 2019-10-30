import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DragcardService {

  constructor(private http:HttpClient) { }

  dragCard( old_list, card_id, new_list): Observable<any>{
    let url = `/api/list/${old_list}/card/${card_id}/dragged/${new_list.id}/`
    console.log(new_list, "newlist")
    let card = {'id':new_list.id}
    console.log(url,"teststs")
    return this.http.post(url, card)
  }

  

}
