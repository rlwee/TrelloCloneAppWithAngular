import { Component, OnInit, Input } from '@angular/core';
import { List } from 'src/app/models/lists';
import { BoarddetailComponent } from '../../components/boarddetail/boarddetail.component';
import { Board } from '../../models/boards';
import { BoardlistService } from '../../services/boardlist/boardlist.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-boardlist',
  templateUrl: './boardlist.component.html',
  styleUrls: ['./boardlist.component.css']
})
export class BoardlistComponent implements OnInit {
  @Input() list:List
  closeResult: string;

  board:Board[];


  
  
  // lists:List[] = [];
  
  constructor(private blist:BoardlistService, 
              private route:Router, 
              private r:ActivatedRoute , 
              ) { }

  ngOnInit() {
    // console.log(this.board,'boardtestetsets')
    // console.log(this.route.url)
    // console.log(this.route.url, 'tetstsest url')
    // let board_id = + this.r.snapshot.paramMap.get('id');
    // console.log(board_id,'BOARD ID TEST')
    // this.blist.displayLists(board_id).subscribe( data => {

      
    //   this.list = data;

    //   console.log(this.list,'LIST LIST TEST')
    //   // this.lists = data;
    // })
  }


  

  createList():void{

  }



 

}
