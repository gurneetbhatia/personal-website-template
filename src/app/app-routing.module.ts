import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './pages/projects/projects.component';
import { CompetitionsComponent } from './pages/competitions/competitions.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'competitions', component: CompetitionsComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
