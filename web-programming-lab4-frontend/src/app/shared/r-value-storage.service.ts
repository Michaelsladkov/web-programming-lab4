import { Injectable } from '@angular/core';
import { Updatable } from './updateable';

@Injectable({
  providedIn: 'root'
})
export class RValueStorageService {
  private r: number = 3;
  private subs: Updatable[] = [];

  public subscribe(f: Updatable) {
    this.subs.push(f);
  }

  public getR(): number {
    return this.r;
  }

  public setR(newR: number | null) {
    if (typeof newR == "number" && newR != undefined) {
      this.r = newR;

      for (let f of this.subs) {
        f.update(newR);
      }
    }
  }
  constructor() { }
}

interface MyFunction {
  (n: number): void;
}