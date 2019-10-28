import { Component, OnInit, Inject, Input, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { BoarddetailService } from '../../services/boarddetail/boarddetail.service';
import { Board } from '../../models/boards';
import { BoardlistService } from '../../services/boardlist/boardlist.service';
import { CreatecardService } from '../../services/createcard/createcard.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { List } from  '../../models/lists'
import { Card } from '../../models/cards';


@Component({
  selector: 'app-boarddetail',
  templateUrl: './boarddetail.component.html',
  styleUrls: ['./boarddetail.component.css']
})

export class BoarddetailComponent implements OnInit {
  boards:Board[] = [];
  board:Board[]
  lists:List[] = [];
  cards:Card[];

  

  // @ViewChild('div') div: ElementRef;

  form: FormGroup = new FormGroup({
    listName: new FormControl('',Validators.required)
  });

  constructor(private blist:BoardlistService, 
              private boardDetail:BoarddetailService, 
              private route:Router, 
              private r:ActivatedRoute,
              private renderer:Renderer2,
              private cardService:CreatecardService
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
          console.log(data,'oush')
          this.lists.push(data)
      });
      }
    }

    addcard(list:List, card:Card){
      
          console.log(card, 'testing testing')
        
          
    }

  }

   


