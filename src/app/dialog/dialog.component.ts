import { Component } from '@angular/core';
import { DarkModeService } from '../share/dark-mode/dark-mode.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})

export class DialogComponent {
  isDarkMode = false;
  showHistory = false;

  private darkModeSubscription: Subscription;

  constructor(private darkModeService: DarkModeService) {
    this.darkModeSubscription = this.darkModeService.isDarkMode$.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

  ngOnDestroy() {
    this.darkModeSubscription.unsubscribe();
  }
  
  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }

  toggleHistoryMode() {
    this.showHistory = !this.showHistory;
  }
}

