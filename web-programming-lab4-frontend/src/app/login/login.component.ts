import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../shared/login.service';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'lab4-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService : LoginService, private router : Router) { }

  login : string = "";
  password : string = "";
  errors : string = "";

  public logIn() : void {
    this.errors = "";
    if (!this.validate()) return;
    this.loginService.logIn(this.login, this.password)
        .subscribe((next) => this.router.navigate(['shots']), error=>this.setLoginError());
  }

  public register() : void {
    this.errors = "";
    if (!this.validate()) return;
    this.loginService.addUser(this.login, this.password)
       .subscribe((data) => this.logIn(), error => this.setRegisterError());
  }

  public validate() : boolean {
    if (this.login.length == 0) {
      this.errors = "Введите логин";
      return false;
    }
    if (this.password.length == 0) {
      this.errors = "Введите пароль";
      return false;
    }
    return true;
  }

  private setRegisterError() : void {
    this.errors = "Не получилось зарегистрировать такого юзера";
    console.log(this.errors);
  }

  private setLoginError() : void {
    this.errors = "Не получилось авторизоваться";
    console.log(this.errors);
  }

  ngOnInit(): void {
  }

}
