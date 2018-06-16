import { Component } from '@angular/core';
import { SubscribeService } from '../subscribe/shared/subscribe.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(
    private subscribeService: SubscribeService
  ) { }

  openModal() {
    this.subscribeService.openModal();
  }

}
