import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Board } from '../../models/boards';
import { DeleteboardService } from '../../services/deleteboard/deleteboard.service';

@Component({
  selector: 'app-deleteboard',
  templateUrl: './deleteboard.component.html',
  styleUrls: ['./deleteboard.component.css']
})
export class DeleteboardComponent implements OnInit {
  boards:Board[] = [];

  constructor(private delet:DeleteboardService, private r:ActivatedRoute) { }

  ngOnInit() {
    let board_id = + this.r.snapshot.paramMap.get('id')
    console.log(board_id, 'deleteboardtest')
    this.delet.deleteBoard(board_id).subscribe( data => {
      this.boards = data
      console.log('board deleted')
    })
  }

  


}