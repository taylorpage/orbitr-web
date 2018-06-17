import { Component, EventEmitter, Input, OnInit } from '@angular/core';

import { MaterializeAction } from 'angular2-materialize';
import { SubscribeService } from '../shared/subscribe.service';
import { dropAnimations } from '../../animation/animations';

@Component({
  selector: 'app-subscribe-modal',
  templateUrl: './subscribe-modal.component.html',
  styleUrls: ['./subscribe-modal.component.scss'],
  animations: dropAnimations
})
export class SubscribeModalComponent implements OnInit {

  public modalActions = new EventEmitter<string|MaterializeAction>();
  public form = this.subscribeService.subscribed ? 'inactive' : 'active';
  public success = this.subscribeService.subscribed ? 'active' : 'inactive';
  public error = 'inactive';
  public loading = 'inactive';

  private actionMap = {
    open: this.openModal.bind(this),
    close: this.closeModal.bind(this),
    success: this.showSuccess.bind(this),
    loading: this.activateLoader.bind(this),
    error: this.showError.bind(this)
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
    this.loading = 'inactive';
    this.success = 'active';
    this.form = 'inactive';
  }

  showError() {
    this.loading = 'inactive';
    this.form = 'inactive';
    this.error = 'active';
    setTimeout(() => {
      this.error = 'inactive';
      this.form = 'active';
    }, 5000);
  }

  activateLoader() {
    this.form = 'inactive';
    this.loading = 'active';
  }
}
