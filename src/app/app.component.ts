import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit, AfterViewInit {
  title = 'smart-efd-clone2';
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isSmallScreen: boolean | undefined;
  isScreenSmall: boolean | undefined;

  constructor(private breakpointObserver: BreakpointObserver) {}
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.Small])
      .subscribe(result => {
        this.isScreenSmall = result.matches;
      });
  }

  toggleSidebar() {
    if (this.isSmallScreen) {
      this.sidenav.toggle();
    }
  }

  openLanguageOptions(): void {
   // this.dialog.open(LanguageOptionsComponent);
  }

  openUserOptions(): void {
    //this.dialog.open(UserOptionsComponent);
  }
}
