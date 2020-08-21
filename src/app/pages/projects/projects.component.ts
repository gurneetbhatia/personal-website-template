import { Component, OnInit } from '@angular/core';

import { Project } from './project';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectsList: Project[];

  constructor(private dataService: DataService) {
    this.projectsList = this.dataService.getProjects();
  }

  ngOnInit(): void {
  }

}
