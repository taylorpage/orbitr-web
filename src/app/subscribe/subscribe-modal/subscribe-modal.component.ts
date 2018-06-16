import { Component, EventEmitter, Input, OnInit } from '@angular/core';

import { MaterializeAction } from 'angular2-materialize';
import { SubscribeService } from '../shared/subscribe.service';

@Component({
  selector: 'app-subscribe-modal',
  templateUrl: './subscribe-modal.component.html',
  styleUrls: ['./subscribe-modal.component.scss']
})
export class SubscribeModalComponent implements OnInit {

  modalActions = new EventEmitter<string|MaterializeAction>();

  constructor(
    private subscribeService: SubscribeService
  ) { }

  ngOnInit() {
    this.subscribeService.modalEmitter.subscribe(emission => {
      emission === 'open' ? this.openModal() : this.closeModal();
    });
  }

  openModal() {
    this.modalActions.emit({ action: "modal", params: ['open'] });
  }
  closeModal() {
    this.modalActions.emit({ action: "modal", params: ['close'] });
  }

}
