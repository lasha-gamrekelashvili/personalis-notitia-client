import { Component, OnInit } from '@angular/core';
import { DarkModeService } from '../share/dark-mode/dark-mode.service';
import { Subscription } from 'rxjs';
import axios from 'axios';

@Component({
  selector: 'app-dialog-history',
  templateUrl: './dialog-history.component.html',
  styleUrls: ['./dialog-history.component.scss']
})
export class DialogHistoryComponent implements OnInit {

  dialogs: any[] = [];
  isDarkMode = false;

  private darkModeSubscription: Subscription;

  constructor(private darkModeService: DarkModeService) {
    this.darkModeSubscription = this.darkModeService.isDarkMode$.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

  ngOnInit(): void {
    this.getDialogs();
  }

  ngOnDestroy() {
    this.darkModeSubscription.unsubscribe();
  }
  
  async getDialogs() {
    try {
      const response = await axios.get('https://localhost:44390/api/dialog');
      this.dialogs = response.data;
    } catch (error) {
      console.error('Error fetching dialogs:', error);
    }
  }
}
