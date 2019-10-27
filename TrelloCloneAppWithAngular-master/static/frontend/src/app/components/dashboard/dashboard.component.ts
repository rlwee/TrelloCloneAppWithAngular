import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../../services/dashboard/dashboard.service'
import { Board } from '../../models/boards'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  boards:Board[];

  constructor(private router:Router, private dashService:DashboardService) { }

  ngOnInit() {
    this.dashService.boardList().subscribe( data => {
      this.boards = data;
      
    });

  }

  boardList():void{
    console.log('test')

    
  }




}
