import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { LanguageService } from '../language-service.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  implements OnInit, AfterViewInit {
  title = 'smart-efd-clone2';
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isSmallScreen: boolean | undefined;
  isScreenSmall: boolean | undefined;

  //my ver used here 
  homeText!: string;
  reportText!: string;
  receiptText!: string;
  invoiceText!: string;
  VFDAccountsText!: string;
  profileText!: string;
  adminDashboardText!: string;
  constructor(private breakpointObserver: BreakpointObserver, private languageService: LanguageService) {}
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.Small])
      .subscribe(result => {
        this.isScreenSmall = result.matches;
      });

        this.languageService.getLanguage().subscribe(language => {
          this.homeText = this.languageService.translate('Home');
          this.reportText = this.languageService.translate('Report');
          this.receiptText = this.languageService.translate('Receipt');
          this.invoiceText = this.languageService.translate('Invoice');
          this.VFDAccountsText = this.languageService.translate('VFD Accounts');
          this.profileText = this.languageService.translate('Profile');
          this.adminDashboardText = this.languageService.translate('Admin Dashboard')
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



