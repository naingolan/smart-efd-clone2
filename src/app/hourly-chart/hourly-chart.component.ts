import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-hourly-chart',
  templateUrl: './hourly-chart.component.html',
  styleUrls: ['./hourly-chart.component.css']
})
export class HourlyChartComponent implements OnInit {
  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'bar',
      data: {
        labels: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
        datasets: [
          {
            label: "Sales",
            data: [467, 576, 572, 79, 92, 574, 573, 576],
            backgroundColor: 'blue'
          },
         
        ]
      },
      options: {
        aspectRatio: 2.5
      }
    });
  }
}
