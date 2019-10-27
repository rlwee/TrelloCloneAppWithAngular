import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BoardsService } from '../../services/boards/boards.service'
import { Board } from '../../models/boards'
import {Inject} from '@angular/core';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {
  boards:Board[];

  constructor(@Inject(Router) private route:Router, private boardService:BoardsService, private r:ActivatedRoute) { }

  ngOnInit() {

    this.boardService.boardList().subscribe( data => {
      this.boards = data;
      for (let board of this.boards){
        board.title = board.title
      }

    });

  }



  boardDetail():void{
    console.log('testboarddetailadasd')
  }


}
