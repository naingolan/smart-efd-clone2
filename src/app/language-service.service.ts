import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private languageSubject: BehaviorSubject<string> = new BehaviorSubject<string>('EN');

  constructor() { }

  updateLanguage(language: string): void {
    this.languageSubject.next(language);
  }

  getLanguage(): BehaviorSubject<string> {
    return this.languageSubject;
  }

  translate(key: string): string {
    const language = this.languageSubject.value;

    switch (language) {
      case 'EN':
        return this.translateEN(key);
      case 'SW':
        return this.translateSW(key);
      default:
        return '';
    }
  }

  private translateEN(key: string): string {
    switch (key) {
      case 'Home':
        return 'Home';
      case 'Report':
        return 'Report';
      // Add more translations here
      default:
        return '';
    }
  }

  private translateSW(key: string): string {
    switch (key) {
      case 'Home':
        return 'Nyumbani';
      case 'Report':
        return 'Ripoti';
      case 'Invoice':
        return 'Invoice';
      
      // Add more translations here
      default:
        return '';
    }
  }
}
