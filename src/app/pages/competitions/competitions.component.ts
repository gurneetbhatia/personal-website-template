import { Component, OnInit } from '@angular/core';

import { Competition } from './competition';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class CompetitionsComponent implements OnInit {

  competitionsList: Competition[];

  constructor(private dataService: DataService) {
    this.competitionsList = this.dataService.getCompetitions();
  }

  ngOnInit(): void {
  }

}
