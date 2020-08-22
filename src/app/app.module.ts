import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CompetitionsComponent } from './pages/competitions/competitions.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { CompetitionCardComponent } from './pages/competitions/competition-card/competition-card.component';
import { ProjectCardComponent } from './pages/projects/project-card/project-card.component';
import { ProjectViewComponent } from './pages/projects/project-view/project-view.component';
import { RotateTextDirective } from './common/rotate-text.directive';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompetitionsComponent,
    ProjectsComponent,
    NavbarComponent,
    FooterComponent,
    CompetitionCardComponent,
    ProjectCardComponent,
    ProjectViewComponent,
    RotateTextDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
