import { Component, OnInit } from '@angular/core';
import { ShotResponse } from '../shared/model/response.shot.model';
import { ShotsService } from '../shared/shots.service';

@Component({
  selector: 'lab4-shooting-form',
  templateUrl: './shooting-form.component.html',
  styleUrls: ['./shooting-form.component.css']
})
export class ShootingFormComponent implements OnInit {
  xValues : boolean[] = [false, false, false, false, false, false, false, false, false];
  rValues : boolean[] = [false, false, false, false, false, false, false, false, false];
  xValue : number | null = null;
  yValue : number | null = null;
  rValue : number | null = null;
  errors : string = "";
  yValueStr : string = "";
  shots: ShotResponse[] = [];

  xChanged(x : number) : void {
    this.errors = "";
    for(let i = 0; i < 9; i++) {
      if (i != x + 3) this.xValues[i] = false;
    }
    console.log(this.xValues);
    this.xValue = this.xValues[x+3] ? x : null;
  }

  rChanged(r : number) : void {
    this.errors = "";
    for(let i = 0; i < 9; i++) {
      if (i != r + 3) this.rValues[i] = false;
    }
    if (r <= 0) {
      this.errors = "R должен быть больше 0"
      this.rValue = r;
      return;
    }
    this.rValue = this.rValues[r+3] ? r : null;
  }

  checkY() : boolean {
    this.errors = "";
    if (this.yValueStr === "" ||
        ((!this.yValueStr.match(/^-?[0-9]*$/)) && (!this.yValueStr.match(/^-?[0-9]*[\.,][0-9]+$/)))){
      this.errors = "Введите число Y";
      return false;
    }
    this.yValue = parseFloat(this.yValueStr);
    if (this.yValue == NaN) {
      this.errors = "Введите число Y";
      return false;
    }
    if (this.yValue <= -5 || this.yValue >= 3) {
      this.errors = "Y должен быть в интервале (-5, 3)";
      return false;
    }
    return true;
  }

  private validate() : boolean {
    if (this.rValue == null) {
      this.errors = "Введите R"
      return false;
    }
    if (this.rValue <= 0) {
      this.errors = "R должен быть больше 0"
      return false;
    }
    if (this.xValue == null) {
      this.errors = "Введите X"
      return false;
    }
    return this.checkY();
  }

  submitShot() : void {
    if (!this.validate) return;
    if (this.xValue == null || this.yValue == null || this.rValue == null) return;
    this.shotService.sendShot(this.xValue, this.yValue, this.rValue).subscribe((rep: ShotResponse) => {
      console.log(rep);
      this.shots.push(rep);
      console.log(this.shots);
    });
  }

  clearResults() : void {
    this.shotService.clear().subscribe((data) => {
      console.log("cleared")
      this.fetch();
    });

  }

  private fetch(): void {
    this.shotService.fetchShots().subscribe((data: ShotResponse[])  => {
      this.shots = data
      console.log(this.shots);
    });
  }

  constructor(private shotService : ShotsService) { }

  ngOnInit(): void {
    this.fetch();
  }

}
