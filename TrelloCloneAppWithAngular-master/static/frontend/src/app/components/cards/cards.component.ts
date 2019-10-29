import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../../models/cards';
import { CardsService } from '../../services/cards/cards.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


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
