import { Component } from '@angular/core';
import { SubscribeService } from '../shared/subscribe.service';

@Component({
  selector: 'app-subscribe-main',
  templateUrl: './subscribe-main.component.html',
  styleUrls: ['./subscribe-main.component.scss']
})
export class SubscribeMainComponent {

  constructor(
    private subscribeService: SubscribeService
  ) { }

  openModal() {
    this.subscribeService.openModal();
  }

}
