import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateuserService } from '../../services/createuser/createuser.service'
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private auth:CreateuserService,
              private router:Router) { }

  ngOnInit() {
  }

  createUser():void{
    this.auth.createUser(this.form.value.username, this.form.value.email,this.form.value.password).subscribe(
      success => {
      
      if(success != null){
        this.router.navigate(['']);
      }
    });
  }

}
