import { Component, OnInit } from '@angular/core';
import { ShotResponse } from '../shared/model/response.shot.model';
import { RValueStorageService } from '../shared/r-value-storage.service';
import { ShotsRepositoryService } from '../shared/shots-repository.service';
import { ShotsService } from '../shared/shots.service';
import { Updatable } from '../shared/updateable';

@Component({
  selector: 'lab4-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit, Updatable {

  dashes: string[] = ["12.5%", "20%", "27.5%", "35%", "42.5%", "57.5%", "65%", "72.5%", "80%", "87.5%"];
  pathWithR: string = "";

  getShots(): ShotResponse[] {
    return this.shotsRepository.getShots();
  }

  public update(n: number): void {
    this.updatePath(n);
  }

  private updatePath(r: number): void {
    this.pathWithR = `M 250 250
                  L 250 ${250 - r * 0.5 * 37.5}
                  L ${250 + r * 0.5 * 37.5} 250
                  L ${250 + r * 37.5} 250
                  L ${250 + r * 37.5} ${250 + r * 0.5 * 37.5}
                  L 250 ${250 + r * 0.5 * 37.5}
                  L 250 ${250 + r * 37.5}
                  A ${r * 37.5} ${r * 37.5} 0 0 1 ${250 - r * 37.5} 250
                  L 250 250`;
  }

  processClick(eventObj: MouseEvent): void {
    let x: number = (eventObj.offsetX - 250) / 37.5;
    let y: number = (-eventObj.offsetY + 250) / 37.5;
    this.shotService.sendShot(x, y, this.rStorage.getR()).subscribe((rep: ShotResponse) => {
      this.shotsRepository.putShot(rep);
    });
    console.log(eventObj.offsetX - 250);
    console.log(-eventObj.offsetY + 250);
  }

  constructor(private rStorage: RValueStorageService, private shotsRepository: ShotsRepositoryService, private shotService: ShotsService) { }

  ngOnInit(): void {
    this.rStorage.subscribe(this);
    this.updatePath(3);
  }

}
