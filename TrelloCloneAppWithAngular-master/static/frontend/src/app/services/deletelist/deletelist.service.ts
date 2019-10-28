import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeletelistService {

  delete_url:string = 'api/board/'

  constructor(private http:HttpClient) { }

  deletelist(list_id, board_id): Observable<any> {

    const url = this.delete_url + `${board_id}/` + 'list/' + `${list_id}/` + 'deleted/';

    console.log(url,"delete list url test")
    
    return this.http.get(url)
  }


  deleteList(list_id, board_id): Observable<any> {

      console.log(list_id, "list_id");
      console.log(board_id, 'board_id');
      const url = this.delete_url + `${board_id}/` + 'list/' + `${list_id}/` + 'deleted/';

      return this.http.get(url)
  }

}
