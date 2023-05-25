import { Component } from '@angular/core';
import getData from '../data';
import { MatTableDataSource } from '@angular/material/table';

interface TableRow {
  hours: number;
  receipt: number;
  totalInclusiveTax: number;
  totalExclusiveTax: number;
}


@Component({
  selector: 'app-table',
  templateUrl:'./table.component.html',
  styleUrls: ['./table.component.css']

})
export class TableComponent {
  public data: any[] | undefined;


 

  public dataSource: MatTableDataSource<TableRow> ;
  public displayedColumns: string[] = ['hours', 'receipt', 'totalInclusiveTax', 'totalExclusiveTax'];



  constructor() {
    this.data = getData();
    this.dataSource = new MatTableDataSource<TableRow>(this.data.map(item => ({
      hours: item.Hours,
      receipt: item.Receipt,
      totalInclusiveTax: item.TotalInclusiveTax,
      totalExclusiveTax: item.TotalExclusiveTax,

    })));

    this.displayedColumns = ['receipt', 'totalInclusiveTax', 'totalExclusiveTax', ...this.data.map(item => `Hours ${item.Hours}`)].reverse();

  }
}