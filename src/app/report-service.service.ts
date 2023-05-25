import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private data: any[] = [
    {
      type: 'Receipts',
      data: {
        hourly: [
          { hour: '00', score: 10 },
          { hour: '01', score: 8 },
          { hour: '02', score: 50 },
          { hour: '03', score: 70 },
          // Add hourly scores for other hours
        ],
        weekly: [
          { day: 'Monday', score: 56 },
          { day: 'Tuesday', score: 64 },
          // Add weekly scores for other days
        ],
        monthly: [
          { day: '01', score: 250 },
          { day: '02', score: 320 },
          // Add monthly scores for other days
        ],
        yearly: [
          { month: 'January', score: 3000 },
          { month: 'February', score: 4000 },
          // Add yearly scores for other months
        ]
      }
    },
    {
      type: 'Tax Inclusive',
      data: {
        // Same structure as Receipts, but with different scores
        hourly: [
          { hour: '00', score: 10 },
          { hour: '01', score: 8 },
          { hour: '02', score: 50 },
          { hour: '03', score: 70 },
          // Add hourly scores for other hours
        ],
        weekly: [
          { day: 'Monday', score: 56 },
          { day: 'Tuesday', score: 64 },
          // Add weekly scores for other days
        ],
        monthly: [
          { day: '01', score: 250 },
          { day: '02', score: 320 },
          // Add monthly scores for other days
        ],
        yearly: [
          { month: 'January', score: 3000 },
          { month: 'February', score: 4000 },
          // Add yearly scores for other months
        ]
      }
    },
    {
      type: 'Tax Exclusive',
      data: {
        // Same structure as Receipts, but with different scores
        hourly: [
          { hour: '00', score: 10 },
          { hour: '01', score: 8 },
          { hour: '02', score: 50 },
          { hour: '03', score: 70 },
          // Add hourly scores for other hours
        ],
        weekly: [
          { day: 'Monday', score: 56 },
          { day: 'Tuesday', score: 64 },
          // Add weekly scores for other days
        ],
        monthly: [
          { day: '01', score: 250 },
          { day: '02', score: 320 },
          // Add monthly scores for other days
        ],
        yearly: [
          { month: 'January', score: 3000 },
          { month: 'February', score: 4000 },
          // Add yearly scores for other months
        ]
      }
    },
    {
      type: 'Tax',
      data: {
        // Same structure as Receipts, but with different scores
        hourly: [
          { hour: '00', score: 10 },
          { hour: '01', score: 8 },
          { hour: '02', score: 50 },
          { hour: '03', score: 70 },
          // Add hourly scores for other hours
        ],
        weekly: [
          { day: 'Monday', score: 56 },
          { day: 'Tuesday', score: 64 },
          // Add weekly scores for other days
        ],
        monthly: [
          { day: '01', score: 250 },
          { day: '02', score: 320 },
          // Add monthly scores for other days
        ],
        yearly: [
          { month: 'January', score: 3000 },
          { month: 'February', score: 4000 },
          // Add yearly scores for other months
        ]
      }
    }
  ];

  constructor() {}

  public getReportData(reportType: string, itemType: string, duration: string): any[] {
    const itemData = this.data.find(item => item.type === itemType);
    if (!itemData) {
      return [];
    }
  
    const reportData = itemData.data[duration];
    if (!reportData) {
      return [];
    }
  
    return reportData.map((entry: { hour?: any; day?: any; month?: any; score: any; }) => ({
      x: entry.hour !== undefined ? entry.hour.toString() : entry.day || entry.month || '',
      y: entry.score
    }));
  }
}
