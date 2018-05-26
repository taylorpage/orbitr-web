import { Component, EventEmitter, Input } from '@angular/core';

import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-subscribe-modal',
  templateUrl: './subscribe-modal.component.html',
  styleUrls: ['./subscribe-modal.component.scss']
})
export class SubscribeModalComponent {

  @Input() id: number;

  modalActions = new EventEmitter<string|MaterializeAction>();

  constructor() { }

  openModal() {
    this.modalActions.emit({ action: "modal", params: ['open'] });
  }
  closeModal() {
    this.modalActions.emit({ action: "modal", params: ['close'] });
  }

}
