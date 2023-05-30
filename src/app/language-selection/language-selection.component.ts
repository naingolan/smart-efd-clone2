import { Component } from '@angular/core';
import { LanguageService } from '../language-service.service';

@Component({
  selector: 'app-language-selection',
  templateUrl: './language-selection.component.html',
  styleUrls: ['./language-selection.component.css']
})
export class LanguageSelectionComponent {
  selectedLanguage!: string;

  constructor(private languageService: LanguageService) { }

  updateLanguage(): void {
    this.languageService.updateLanguage(this.selectedLanguage);
  }
}
