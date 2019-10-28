import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import { error } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    form: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });


  constructor(private httpClient: HttpClient, private router:Router, private auth: LoginService ) { }

  ngOnInit() {
  }

  validate(){
    console.log(this.form);
  }

  // loginUser():void{
  //   this.httpClient.post('http://127.0.0.1:8000/users/', this.form.value).subscribe(success => {
  //     console.log('login user');
  //     localStorage.setItem('Auth', String(success))
  //     this.router.navigateByUrl('/');
  //     console.log(localStorage.getItem('Auth'))
  //   });
  // }

  loginUser():void{
    this.auth.loginUser(this.form.value.username, this.form.value.password).subscribe(
      success => {
      console.log(success, 'testing');
      console.log(success['token'], 'testinglang');
      if(success != null){
        console.log(success, 'not null')
        localStorage.setItem('Authorization', String(success))
        console.log('Logged in');
        this.router.navigate(['dashboard']);
        console.log(success, 'suecess')
      }
    });
  }

  registerUser():void{
    this.router.navigate(['register']);
  }




}
