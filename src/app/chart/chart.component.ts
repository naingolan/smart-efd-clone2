import { Component } from '@angular/core';
import { AgChartOptions } from 'ag-charts-community';
import getData from '../data';
import { MatTableDataSource } from '@angular/material/table';

interface TableRow {
  hours: number;
  receipt: number;
  totalInclusiveTax: number;
  totalExclusiveTax: number;
}


@Component({
  selector: 'app-chart',
  templateUrl:'./chart.component.html'
})
export class ChartComponent {
  public options: AgChartOptions;
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


    this.options = {
      title: {
        text: '',
      },
      subtitle: {
        text: 'Total winnings by participant age',
      },
      data: getData(),
      series: [
        {
          type: 'histogram',
          xKey: 'Hours',
          xName: 'Hours',
          yKey: 'TotalInclusiveTax',
          yName: 'Total Inclusive Tax',
        },
      ],
      legend: {
        enabled: false,
      },
      axes: [
        {
          type: 'number',
          position: 'bottom',
          title: { text: 'Hour' },
          tick: { interval: 1 },
        },
        {
          type: 'number',
          position: 'left',
          title: { text: 'Total Inclusive Tax' },
        },
      ],
    };
  }

  ngOnInit() {}
}
