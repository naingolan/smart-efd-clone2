import { Component, ViewChild, ElementRef } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-receipt-genarator',
  templateUrl: './receipt-genarator.component.html',
  styleUrls: ['./receipt-genarator.component.css'],
})
export class ReceiptGenaratorComponent {
  formData: any;
  @ViewChild('htmlData') htmlData!: ElementRef;

  constructor() {}
  generatePDF(formData: any): void {
    const receiptData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      // Add other relevant data as needed
    };
  
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.output('dataurlnewwindow');  // Download the PDF file
    });
  }
  
}
