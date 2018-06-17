import { Component, EventEmitter, Input, OnInit } from '@angular/core';

import { MaterializeAction } from 'angular2-materialize';
import { SubscribeService } from '../shared/subscribe.service';

@Component({
  selector: 'app-subscribe-modal',
  templateUrl: './subscribe-modal.component.html',
  styleUrls: ['./subscribe-modal.component.scss']
})
export class SubscribeModalComponent implements OnInit {

  public modalActions = new EventEmitter<string|MaterializeAction>();
  public subscribed = this.subscribeService.subscribed;

  private actionMap = {
    open: this.openModal.bind(this),
    close: this.closeModal.bind(this),
    success: this.showSuccess.bind(this)
  }

  constructor(
    private subscribeService: SubscribeService
  ) { }

  ngOnInit() {
    this.subscribeService.modalEmitter.subscribe(emission => {
      const action: Function = this.actionMap[emission];
      action();
    });
  }

  openModal() {
    this.modalActions.emit({ action: "modal", params: ['open'] });
  }
  closeModal() {
    this.modalActions.emit({ action: "modal", params: ['close'] });
  }
  showSuccess() {
    this.subscribed = true;
  }

}
