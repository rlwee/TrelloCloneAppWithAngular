import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DeleteboardService {

  deleteUrl:string = 'api/board/';
  // :id/deleted/

  constructor(private http:HttpClient) { }

  deleteBoard(board_id:number): Observable<any>{
    let url = this.deleteUrl + `${board_id}/deleted/`
    return this.http.get(url)
  }


}
