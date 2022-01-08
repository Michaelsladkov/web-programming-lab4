import { Injectable } from '@angular/core';
import { ShotResponse } from './model/response.shot.model';

@Injectable({
  providedIn: 'root'
})
export class ShotsRepositoryService {

  private shots: ShotResponse[] = [];
  public getShots(): ShotResponse[] {
    return this.shots;
  }

  public clear(): void {
    this.shots = [];
  }

  public putShot(shot: ShotResponse): void {
    this.shots.push(shot);
  }

  public putShots(shots: ShotResponse[]): void {
    for(let s of shots) {
      this.shots.push(s);
    }
  }

  public setShots(shots: ShotResponse[]): void {
    this.shots = shots;
  }
  constructor() { }
}
