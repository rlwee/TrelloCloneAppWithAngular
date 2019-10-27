import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateboardService } from '../../services/createboard/createboard.service'
import { HttpClient } from '@angular/common/http'
import { Board } from 'src/app/models/boards';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-createboard',
  templateUrl: './createboard.component.html',
  styleUrls: ['./createboard.component.css']
})
export class CreateboardComponent implements OnInit {
  boards:Board[]

  form: FormGroup = new FormGroup({
    boardTitle: new FormControl('', Validators.required),
  });

  constructor(private create:CreateboardService, private http:HttpClient) { }

  ngOnInit() {
  }

  createBoard():void{
    if(this.form.valid){
      this.create.createBoard(this.form.value.boardTitle).subscribe(
        board => {
          console.log(board,"boarding")
       });
    }
  }
  

}
