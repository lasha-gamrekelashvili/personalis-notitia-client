import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConversationComponent } from './dialog-conversation.component';

describe('DialogConversationComponent', () => {
  let component: DialogConversationComponent;
  let fixture: ComponentFixture<DialogConversationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogConversationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
