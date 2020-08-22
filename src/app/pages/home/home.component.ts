import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('gitStatsContainer') gitStatsContainer: ElementRef;
  gitStats = ``;

  constructor(private dataService: DataService,
              private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.dataService.getGitStats('your-username-goes-here').subscribe(
      (resp) => {
        this.gitStats = resp;
        this.gitStatsContainer.nativeElement.innerHTML = this.gitStats;
      },
      (err) => {
        this.notificationService.showError("There was a problem fetching git data at this time. Please try again later.")
      }
    )
  }

}
