import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';
import { FormsModule } from '@angular/forms';
import { DialogHistoryComponent } from './dialog-history/dialog-history.component';
import { DarkModeService } from './share/dark-mode/dark-mode.service';
import { DialogConversationComponent } from './dialog-conversation/dialog-conversation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    DialogHistoryComponent,
    DialogConversationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxTypedJsModule,
    BrowserAnimationsModule
  ],
  providers: [DarkModeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
