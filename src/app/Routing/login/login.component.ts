import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  constructor(private _route: Router) { }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
 username: string = '';
  password: string = '';

  login(email, pass) {
    console.log(email.value, pass.value);
    this._route.navigate(['home']);
  }
  
 
}