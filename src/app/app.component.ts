import { Component } from '@angular/core';
import { DarkModeService } from './share/dark-mode/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'personalis-notitia';
  
  isDarkMode = false;
  
  constructor(private darkModeService: DarkModeService) {
    this.darkModeService.isDarkMode$.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;

      if (isDarkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    });
  }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }
}
