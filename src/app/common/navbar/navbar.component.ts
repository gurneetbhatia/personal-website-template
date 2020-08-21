import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  open: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  collapseNavbar() {
    if (this.open) {
      document.getElementById('navbar-button').click()
    }
  }

  navbarButtonClicked() {
    this.open = !this.open;
  }

}
