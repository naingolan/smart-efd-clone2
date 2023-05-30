import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface ReportData {
  No: number;
  date: Date;
  name: string;
  amount: number;
  type: string;
}

@Component({
  selector: 'app-search-report',
  templateUrl: './search-report.component.html',
  styleUrls: ['./search-report.component.css']
})
export class SearchReportComponent {
  reportData: ReportData[] = [
    { No: 1, date: new Date('2022-01-01'), name: 'John Doe', amount: 100, type: 'Type A' },
    { No: 2, date: new Date('2022-02-01'), name: 'Jane Smith', amount: 200, type: 'Type B' },
    { No: 3, date: new Date('2022-03-01'), name: 'Bob Johnson', amount: 150, type: 'Type A' },
    // Add more report data here
  ];

  displayedColumns: string[] = ['No', 'date', 'name', 'amount', 'type'];
  dataSource = new MatTableDataSource<ReportData>(this.reportData);

  startDate!: Date | null;
  endDate!: Date | null;

  applyDateFilter(): void {
    const start = this.startDate;
    const end = this.endDate;
  
    this.dataSource.data = this.reportData.filter((data: ReportData) => {
      const date = data.date;
  
      if (start && end) {
        return date >= start && date <= end;
      }
  
      return true;
    });
  }
}
