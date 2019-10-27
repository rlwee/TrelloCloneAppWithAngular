import { Component, OnInit } from '@angular/core';
import { BoarddetailComponent } from '../../components/boarddetail/boarddetail.component'
import { Router } from '@angular/router';

@Component({
  selector: 'app-boardheader',
  templateUrl: './boardheader.component.html',
  styleUrls: ['./boardheader.component.css']
})
export class BoardheaderComponent implements OnInit {
  b = this.detail.boards;
  constructor(private detail:BoarddetailComponent, private router:Router) { }

  ngOnInit(){
  }

}
