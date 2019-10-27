import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoarddetailComponent } from '../../components/boarddetail/boarddetail.component';
import {Inject} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router:Router) { }

  ngOnInit() {
  }

}
