import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShotRequest } from './model/request.shot.model';
import { ShotResponse } from './model/response.shot.model';
import { SessionRepositoryService } from './session-repository.service';

@Injectable({
  providedIn: 'root'
})
export class ShotsService {
  constructor(private sessionRepository: SessionRepositoryService, private httpClient : HttpClient) { }
  private url : string = "http://localhost:8080/shot"

  public sendShot(x: number, y: number, r: number) : Observable<ShotResponse> {
    let shot : ShotRequest = new ShotRequest(this.sessionRepository.getUsername(), x , y, r);
    let body : string = JSON.stringify(shot);
    console.log(body);
    return this.httpClient.post<ShotResponse>(this.url, body, {
      responseType: 'json',
      headers: {
      'Content-Type': 'application/json',
      'username' : this.sessionRepository.getUsername(),
      'authorization' : this.sessionRepository.getToken()
      }
    });
  }

  public fetchShots() : Observable<ShotResponse[]> {
    return this.httpClient.get<ShotResponse[]>(this.url, {
      responseType: 'json',
      headers: {
      'Content-Type': 'application/json',
      'username' : this.sessionRepository.getUsername(),
      'authorization' : this.sessionRepository.getToken()
      }
    });
  }

  public clear()  : Observable<any> {
    return this.httpClient.delete<ShotResponse[]>(this.url, {
      responseType: 'json',
      headers: {
      'Content-Type': 'application/json',
      'username' : this.sessionRepository.getUsername(),
      'authorization' : this.sessionRepository.getToken()
      }
    });
  }
}
