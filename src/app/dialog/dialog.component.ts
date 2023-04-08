import { Component, ViewChild, ElementRef } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  @ViewChild('chatHistoryContainer') private chatHistoryContainer!: ElementRef;

  isDarkMode = false;
  userInput = '';
  chatbotOutput = '';
  isGenerating = false;

  chatHistory: { userInput: string, chatbotOutput: string }[] = [];

  template1 = 'Brief summary of proffesional experience';
  template2 = 'What is your salary expectation?';
  template3 = 'Where did you study?';

  onFormSubmit(event: any) {
    event.preventDefault();
    
    if (this.userInput.trim() !== '') {
      this.isGenerating = true;
      axios.post('https://localhost:44390/api/dialog', { message: this.userInput })
        .then((response) => {
          const responseArr = response.data.split('');
          let chatbotOutput = '';
          
          this.chatHistory.push({ userInput: this.userInput, chatbotOutput: chatbotOutput || '' });

          this.userInput = '';

          if (this.chatHistory.length > 0) {
            const lastChat = this.chatHistory[this.chatHistory.length - 1];
            chatbotOutput = lastChat.chatbotOutput + chatbotOutput;
          }
          
          for (let i = 0; i < responseArr.length; i++) {
            setTimeout(() => {
              chatbotOutput += responseArr[i];
              const lastChat = this.chatHistory[this.chatHistory.length - 1];
              lastChat.chatbotOutput = chatbotOutput;
            }, 25 * i);
          }
  
          setTimeout(() => {
            this.isGenerating = false;
          }, 25 * responseArr.length);
        });
  
        setTimeout(() => {
          this.scrollToBottom();
          setTimeout(() => {
            this.scrollToBottom();
          }, 200);
        });
    }
  }
  
  onTemplateClick(value: string) {
    this.userInput = value;

    const fakeEvent = { preventDefault: () => {} };
    this.onFormSubmit(fakeEvent);
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

