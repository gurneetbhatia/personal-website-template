import { Component, OnInit, Input } from '@angular/core';
import { Competition } from '../competition';

@Component({
  selector: 'app-competition-card',
  templateUrl: './competition-card.component.html',
  styleUrls: ['./competition-card.component.css']
})
export class CompetitionCardComponent implements OnInit {

  @Input() competition: Competition;

  constructor() { }

  ngOnInit(): void {
  }

}
