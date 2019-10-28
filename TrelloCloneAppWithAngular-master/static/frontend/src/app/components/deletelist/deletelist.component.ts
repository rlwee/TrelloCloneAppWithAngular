import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { DeletelistService } from '../../services/deletelist/deletelist.service'

@Component({
  selector: 'app-deletelist',
  templateUrl: './deletelist.component.html',
  styleUrls: ['./deletelist.component.css']
})
export class DeletelistComponent implements OnInit {

  constructor(private route:Router,
              private r:ActivatedRoute,
              private deleteList:DeletelistService) { }

  ngOnInit() {

    

    let list_id = + this.r.snapshot.paramMap.get('id')
    let board_id = + this.r.snapshot.paramMap.get('board')
    console.log(list_id,"list_id")
    console.log(board_id,"board_id")
    this.deleteList.deletelist(list_id, board_id).subscribe( data => {

      this.route.navigate(['/board/detail/' + board_id]);

    })

  }

}
