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
      case 'Receipt':
        return 'Receipt';
      case 'Invoice':
        return 'Invoice';
      case 'VFD Accounts':
        return 'VFD Accounts';
      case 'Profile':
        return  'Profile';
      case 'Admin Dashboard':
        return 'Admin Dashboard';
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
      case 'Receipt':
        return 'Risiti';
      case 'Profile':
        return 'Wasifu';
      case 'VFD Accounts':
        return 'Akaunti za VFD';
      case 'Admin Dashboard':
        return 'Dashbodi ya Admin';
      
      // Add more translations here
      default:
        return '';
    }
  }
}
