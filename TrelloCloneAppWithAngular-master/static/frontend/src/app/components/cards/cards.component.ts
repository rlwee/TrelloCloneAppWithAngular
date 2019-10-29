import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../../models/cards';
import { CardsService } from '../../services/cards/cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
@Input() card:Card;
@Output() cardViews: EventEmitter<Card> = new EventEmitter();
@Output() removecard: EventEmitter<Card> = new EventEmitter();

  constructor(private cardo:CardsService) { }

  ngOnInit() {
    
  
  }

  // displayCards(){
  //   this.cardo.cardList()
  // }

  deletecard(card, card_id:number, card_list:number){
      this.removecard.emit(card)
  }

}
