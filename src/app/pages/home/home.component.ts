import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

//import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('gitStatsContainer') gitStatsContainer: ElementRef;
  gitStats = ``;

  constructor() { }

  ngOnInit(): void {
    // this.dataService.getGitStats().subscribe(
    //   (resp) => {
    //     console.log("here")
    //     this.gitStats = resp;
    //     this.gitStatsContainer.nativeElement.innerHTML = this.gitStats;
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // )
  }

}
