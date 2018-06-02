import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { slideAnimations, dropAnimations } from '../../animation/animations';

import { messages } from './messages';

import { AppService } from '../../shared/app.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  animations: [slideAnimations, dropAnimations]
})
export class MessagesComponent {

  @ViewChild('messagesElement') messagesElement: ElementRef;

  public animate = false;
  private animationDefault = this.appService.isMobileDevice ? 'active' : 'inactive';

  public messages = messages;
  public messagesShow = this.animationDefault;

  public message1 = this.animationDefault;
  public message2 = this.animationDefault;
  public message3 = this.animationDefault;
  public message4 = this.animationDefault;

  constructor(
    private appService: AppService
  ) { }

  @HostListener('window:scroll', ['$event'])
  scroll(event) {
    if (this.appService.detectVisibleElement(this.messagesElement)) {
      if (!this.animate) {
        this.animate = true;
        this.messagesShow = 'active';
        this.showMessages();
      }
    }
  }

  showMessages() {
    setTimeout(() => this.message1 = 'active', 500);
    setTimeout(() => this.message2 = 'active', 1000);
    setTimeout(() => this.message3 = 'active', 1500);
    setTimeout(() => this.message4 = 'active', 2000);
  }

  hideMessages() {
    this.message1 = 'inactive';
    this.message2 = 'inactive';
    this.message3 = 'inactive';
    this.message4 = 'inactive';
  }
}
