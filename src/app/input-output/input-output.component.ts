import { Component, ViewChild, ElementRef } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent {
  @ViewChild('chatHistoryContainer') private chatHistoryContainer!: ElementRef;

  isDarkMode = false;
  userInput = '';
  chatbotOutput = '';
  chatHistory: { userInput: string, chatbotOutput: string }[] = [];


  onFormSubmit(event: any) {
    event.preventDefault();
    
    if (this.userInput.trim() !== '') {
      axios.post('https://localhost:44390/api/dialog')
        .then((response) => {
          this.chatHistory.push({ userInput: this.userInput, chatbotOutput: response.data });
          this.userInput = '';
          this.chatbotOutput = '';
        })

      setTimeout(() => {
        this.scrollToBottom();
      });
    }
  }

  scrollToBottom(): void {
    this.chatHistoryContainer.nativeElement.scrollTop = this.chatHistoryContainer.nativeElement.scrollHeight;
  }

  onClear(): void {
    this.chatHistory = [];
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode');
  }
}

