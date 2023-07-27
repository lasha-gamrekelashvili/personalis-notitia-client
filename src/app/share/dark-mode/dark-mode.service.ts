import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private isDarkModeSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isDarkMode$: Observable<boolean> = this.isDarkModeSubject.asObservable();

  toggleDarkMode(): void {
    this.isDarkModeSubject.next(!this.isDarkModeSubject.value);
  }
}