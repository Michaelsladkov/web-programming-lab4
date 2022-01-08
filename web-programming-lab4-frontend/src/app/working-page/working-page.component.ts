import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionRepositoryService } from '../shared/session-repository.service';

@Component({
  selector: 'lab4-working-page',
  templateUrl: './working-page.component.html',
  styleUrls: ['./working-page.component.css']
})
export class WorkingPageComponent implements OnInit {

  constructor(private router: Router, private sessionRepository: SessionRepositoryService) { }

  logOut(): void {
    this.sessionRepository.closeSession();
    location.reload();
  }

  ngOnInit(): void {
  }

}
