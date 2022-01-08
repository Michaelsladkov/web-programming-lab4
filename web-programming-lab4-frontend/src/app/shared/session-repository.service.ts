import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionRepositoryService {
  private token : string = "";
  private username : string = "";

  public closeSession(): void {
    this.token = "";
    this.username = "";
  }

  public saveSession(newToken : string, newName : string) : void {
    console.log("token saved");
    this.token = newToken;
    this.username = newName;
  }

  public getToken(): string {
    return this.token;
  }

  public getUsername() : string {
    return this.username;
  }
  constructor() { }
}
