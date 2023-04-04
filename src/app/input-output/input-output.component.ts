import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent {
  userInput = '';
  chatbotOutput = '';

  onFormSubmit(event: any) {
    event.preventDefault();
    this.chatbotOutput = '';
    setTimeout(()=>{
      if (this.userInput.trim() !== '') {
        const dummyResponse = dummyResponses[Math.floor(Math.random() * dummyResponses.length)];
        this.chatbotOutput = `You said "${this.userInput}", but I am just a dummy response!\n\n${dummyResponse}`;
      }
  
      this.userInput = '';
    },100)
  }

  onInputChange(event: any) {
    this.userInput = event.target.value;
  }
}

const dummyResponses = [
  "Sorry, I didn't understand that.",
  "I'm not sure what you mean.",
  "Could you please rephrase that?",
  "I'm afraid I can't answer that.",
  "Let me think about that for a moment...",
  "I don't have an answer to that, but I can look it up for you!",
  "Interesting question! Unfortunately, I don't have an answer for you right now.",
  "I'm just a dummy response, but I'm happy to chat with you!",
  "Why do you ask?",
  "That's a great question! Let me see if I can find the answer.",
  "I'm not programmed to answer that.",
  "I'm sorry, Dave. I'm afraid I can't do that.",
  "I'm having trouble understanding your question. Can you please clarify?",
  "That's outside the scope of my programming, but I'm happy to chat with you!",
  "I'm a language model created by OpenAI. What can I help you with today?",
];
