import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { AgChartsAngularModule } from 'ag-charts-angular';
import { ChartComponent } from './chart/chart.component';
import { TrendsComponent } from './trends/trends.component';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { DateFormatOptions } from '@syncfusion/ej2-base'
import { CategoryService, DateTimeService, ScrollBarService, ColumnSeriesService, LineSeriesService, 
    ChartAnnotationService, RangeColumnSeriesService, StackingColumnSeriesService,LegendService, TooltipService
 } from '@syncfusion/ej2-angular-charts';
import { ReceiptGenaratorComponent } from './receipt-genarator/receipt-genarator.component';
import { ReportService } from './report-service.service';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { HourlyChartComponent } from './hourly-chart/hourly-chart.component';
import { TableComponent } from './table/table.component';
import { ReceiptsComponent } from './receipts/receipts.component';
import { ReceiptFormComponent } from './receipt-form/receipt-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerEditDialogComponent } from './customer-edit-dialog/customer-edit-dialog.component';
import { BusinessNumberEditComponent } from './dialogs/business-number-edit/business-number-edit.component';
import { LoginNumberEditComponent } from './dialogs/login-number-edit/login-number-edit.component';
import { PasswordEditComponent } from './dialogs/password-edit/password-edit.component';
import { ProductServiceComponent } from './product-service/product-service.component';
import { ProductServiceDisplayComponent } from './product-service-display/product-service-display.component';
import { ManageCustomersComponent } from './manage-customers/manage-customers.component';
import { ManageCustomersDisplayComponent } from './manage-customers-display/manage-customers-display.component';
import { PaymentsComponent } from './payments/payments.component';
import { PaymentsDisplayComponent } from './payments-display/payments-display.component';
import { SearchReportComponent } from './search-report/search-report.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { LanguageSelectionComponent } from './language-selection/language-selection.component';

//These aer for language selection
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

//

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    ChartComponent,
    TrendsComponent,
    ReceiptGenaratorComponent,
    BarChartComponent,
    HourlyChartComponent,
    TableComponent,
    ReceiptsComponent,
    ReceiptFormComponent,
    ProfileComponent,
    UserProfileComponent,
    CustomerDetailsComponent,
    CustomerEditDialogComponent,
    BusinessNumberEditComponent,
    LoginNumberEditComponent,
    PasswordEditComponent,
    ProductServiceComponent,
    ProductServiceDisplayComponent,
    ManageCustomersComponent,
    ManageCustomersDisplayComponent,
    PaymentsComponent,
    PaymentsDisplayComponent,
    SearchReportComponent,
    LanguageSelectionComponent,
  ],
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatButtonToggleModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSortModule,
    MatTableModule,
    MatListModule,
    MatTabsModule,
    AgChartsAngularModule,
    ChartModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [CategoryService, DateTimeService, ScrollBarService, LineSeriesService, ColumnSeriesService, 
    ChartAnnotationService, RangeColumnSeriesService, StackingColumnSeriesService, LegendService, TooltipService, ReportService, ReceiptGenaratorComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
