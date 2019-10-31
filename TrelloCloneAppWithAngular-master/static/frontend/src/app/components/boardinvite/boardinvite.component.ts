import { Component, OnInit } from '@angular/core';
import { BoardinviteService } from '../../services/boardinvite/boardinvite.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-boardinvite',
  templateUrl: './boardinvite.component.html',
  styleUrls: ['./boardinvite.component.css']
})
export class BoardinviteComponent implements OnInit {

    form: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),

  });

  constructor(private r:ActivatedRoute,
              private invite:BoardinviteService) { }

  ngOnInit() {
    let board_id = + this.r.snapshot.paramMap.get('id');
  }


  inviteMember():void{
    let board_id = this.r.snapshot.paramMap.get('id');

    this.invite.inviteMember(this.form.value.email, board_id).subscribe( 
      data => {
      

    })

  }




}
