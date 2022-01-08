import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ShotResponse } from '../shared/model/response.shot.model';
import { ShotView } from '../shared/model/view.shot.model';
import { ShotsRepositoryService } from '../shared/shots-repository.service';

@Component({
  selector: 'lab4-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css']
})
export class ResultsTableComponent implements OnInit {

  constructor(private shotsRepository: ShotsRepositoryService) { }

  getShotsArray(): ShotView[] {
    let arr: ShotResponse[] = this.shotsRepository.getShots();
    let trasformedArr: ShotView[] = [];
    for (let r of arr) {
      trasformedArr.push(new ShotView(r.x, r.y, r.r, this.getFormatedDate(r.dateTime), r.processingTime, r.success ? "да" :  "нет"));
    }
    return trasformedArr;
  }

  getFormatedDate(d: Date): string {
    return formatDate(d, 'yyyy-MM-dd hh:mm:ss', "en-US");
  }

  ngOnInit(): void {
  }

}
