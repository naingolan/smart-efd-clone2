import { Component, OnInit } from '@angular/core';
import { receiptData } from '../receipt-data'; // Assuming receipt data is imported from a file

@Component({
  selector: 'app-trends',
  template: `
    <ejs-chart id="chart-container" [primaryXAxis]="primaryXAxis" [primaryYAxis]="primaryYAxis" [title]="title">
      <e-series-collection>
        <e-series
          [dataSource]="chartData"
          type="Column"
          xName="hour"
          yName="totalInclusiveTax"
          name="Total Inclusive Tax"
        ></e-series>
      </e-series-collection>
    </ejs-chart>
  `,
})
export class TrendsComponent implements OnInit {
  public primaryXAxis: Object | undefined;
  public primaryYAxis: Object | undefined;
  public chartData: Object[] | undefined;
  public title: string | undefined;

  ngOnInit(): void {
    this.chartData = receiptData; // Assign receipt data to the chartData property
    this.primaryXAxis = {
      valueType: 'Category',
      title: 'Hours',
      field: 'hour', // Field mapping for the x-axis
    };
    this.primaryYAxis = {
      title: 'Total Inclusive Tax',
      labelFormat: '${value}', // Format for the y-axis labels (assuming currency)
    };
    this.title = 'Receipt Trends';
  }
}
