import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { List } from 'src/app/models/lists';
import { BoarddetailComponent } from '../../components/boarddetail/boarddetail.component';
import { Board } from '../../models/boards';
import { BoardlistService } from '../../services/boardlist/boardlist.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DeletelistService } from '../../services/deletelist/deletelist.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Card } from '../../models/cards';
import { CreatecardService } from '../../services/createcard/createcard.service';
import { CardsService } from '../../services/cards/cards.service';

@Component({
  selector: 'app-boardlist',
  templateUrl: './boardlist.component.html',
  styleUrls: ['./boardlist.component.css']
})
export class BoardlistComponent implements OnInit {
  @Input() list:List;
  @Output() removelist: EventEmitter<List> =new EventEmitter();
  

  closeResult: string;
  lists:List[] = [];
  cards:Card[] = [];
  card:Card;
  

  id:number;
  title:string;
  labels:string;
  date_created:Date;
  trello_list:number;
  archive:boolean;


  @Output() addcard: EventEmitter<Card> =new EventEmitter()

  form: FormGroup = new FormGroup({
    cardName: new FormControl('',Validators.required)
  });


  
  
  // lists:List[] = [];
  
  constructor(private blist:BoardlistService, 
              private route:Router, 
              private r:ActivatedRoute,
              private deleteList:DeletelistService,
              private createCardo:CreatecardService,
              private cardo:CardsService
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

    this.cardo.cardList(this.list.board, this.list.id).subscribe( 
      data => {
        this.cards = data;

        
    })


  }



  deletelist(list, list_id:number, list_board:number){
    this.removelist.emit(list);
  }

    
  
  createCard():void{
    
    if(this.form.valid){
      this.createCardo.createCard(this.form.value.cardName, this.list).subscribe(
        data =>{
          
          this.cards.push(data);
      })
      this.form.reset();
    }
     
  }



}
