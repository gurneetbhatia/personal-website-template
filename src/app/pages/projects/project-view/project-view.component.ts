import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Project } from '../project';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit {

  project: Project;

  constructor(private router: ActivatedRoute,
              private dataService: DataService) { }

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get("id");
    this.project = this.dataService.getProject(id);
    console.log(this.project.titleVideoUrl);
  }

}
