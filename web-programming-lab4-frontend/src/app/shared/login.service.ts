import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import {User} from 'src/app/shared/model/user.model';
import { SessionRepositoryService } from './session-repository.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl : string = "http://localhost:8080/auth/login";
  private registerUrl : string = "http://localhost:8080/auth/register";

  constructor(private httpClient : HttpClient, private sessionRepository : SessionRepositoryService) { }

  private loggedIn : boolean = false;

  private errors : string = "";

  public getErrors() : string {
    return this.errors;
  }

  public logIn(login: string, password: string) : Observable<any> {
    let obs = this.httpClient.post<LoginResponse>(this.loginUrl, '', {responseType: 'json', 
        headers: {
          'Content-Type': 'application/json',
          'username' : login,
          'password' : password
        }});
    obs.subscribe((data) => {
      this.sessionRepository.saveSession(data.access_token, login);
      this.loggedIn = true;
    });
    this.loggedIn = true;
    return obs;
  }


  public addUser(login : string, password: string) : Observable<any> {
    let user : User = new User(login, password);
    let body : string = JSON.stringify(user);
    console.log(body);
    let obs =  this.httpClient
        .post(this.registerUrl, body, {responseType: 'json', headers: {'Content-Type': 'application/json'}});
    obs.subscribe((data) => {
      this.loggedIn = true;
    })
    return obs;
  }

  public isLoggedIn() : boolean {
    return this.loggedIn;
  }
}

class LoginResponse {
  access_token : string = "";
}
