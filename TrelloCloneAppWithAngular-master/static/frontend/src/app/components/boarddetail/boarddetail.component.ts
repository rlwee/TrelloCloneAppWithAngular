import { Component, OnInit, Inject, Input, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { BoarddetailService } from '../../services/boarddetail/boarddetail.service';
import { Board } from '../../models/boards';
import { BoardlistService } from '../../services/boardlist/boardlist.service';
import { CreatecardService } from '../../services/createcard/createcard.service';
import { DeletelistService } from '../../services/deletelist/deletelist.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { List } from  '../../models/lists'
import { Card } from '../../models/cards';

import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-boarddetail',
  templateUrl: './boarddetail.component.html',
  styleUrls: ['./boarddetail.component.css']
})

export class BoarddetailComponent implements OnInit {
  boards:Board[] = [];
  board:Board[];
  lists:List[] = [];
  cards:Card[] = [];

  

  // @ViewChild('div') div: ElementRef;

  form: FormGroup = new FormGroup({
    listName: new FormControl('',Validators.required)
  });

  constructor(private blist:BoardlistService, 
              private boardDetail:BoarddetailService, 
              private route:Router, 
              private r:ActivatedRoute,
              private renderer:Renderer2,
              private createCardo:CreatecardService,
              private deleteList:DeletelistService,

              ) { }

  ngOnInit() {
    let board_id = + this.r.snapshot.paramMap.get('id');
    this.boardDetail.boardDetail(board_id).subscribe( data => {
      this.boards = data;
       })
    

    this.blist.displayLists(board_id).subscribe( data => {
      this.lists = data;

    })



  }

    createList():void{
      if(this.form.valid){
        console.log(this.form, "ADAS")
        this.boardDetail.createList(this.form.value.listName, this.boards).subscribe( 
        data => {
          console.log(this.boards,'this.boards')
          console.log(data,'push lisst')
          this.lists.push(data)
      });
      }
      this.form.reset();
    }

    // this.lists.filter(dt => dt.id !== list_id)

    removelist(list:List){
      console.log(list, "remove list")
      this.lists = this.lists.filter(dt => dt.id !== list.id);

      this.deleteList.deleteList(list.id, list.board).subscribe();
    }

    // addcard(card:Card){

    //     console.log(card, 'testing testing')
    //     this.createCardo.createCard(card.title, card.trello_list).subscribe(
    //       data =>{
    //         this.cards.push(card);
    //     })
        
    //   }

    drop(event: CdkDragDrop<string[]>) {
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        transferArrayItem(event.previousContainer.data,
                          event.container.data,
                          event.previousIndex,
                          event.currentIndex);
      }
    }

  }

   


