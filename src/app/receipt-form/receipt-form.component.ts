import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-receipt-form',
  templateUrl: './receipt-form.component.html',
  styleUrls: ['./receipt-form.component.css']
})
export class ReceiptFormComponent {
  formData = {
    name: '',
    email: '',
    phone: ''
  };

  showPreview = false;

  constructor() {}

  onSubmit() {
    this.showPreview = true;
  }

  generatePDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('receipt.pdf');
    });
  }

  resetForm() {
    this.showPreview = false;
    this.formData = {
      name: '',
      email: '',
      phone: ''
    };
  }
}
