import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isSmallScreen = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.Handset]).subscribe(result => {
      this.isSmallScreen = result.matches;
    });
  }

  ngAfterViewInit() {
    if (this.isSmallScreen) {
      this.sidenav.close();
    } else {
      this.sidenav.open();
    }
  }

  toggleSidebar() {
    if (this.isSmallScreen) {
      this.sidenav.toggle();
    }
  }
}
