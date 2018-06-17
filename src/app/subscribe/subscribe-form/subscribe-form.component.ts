import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Services
import { SubscribeService } from '../shared/subscribe.service';

@Component({
  selector: 'app-subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.scss']
})
export class SubscribeFormComponent implements OnInit {

  public subscriptionForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private subsribeService: SubscribeService
  ) { }

  ngOnInit() {
    this.createSubscriptionForm();
  }

  createSubscriptionForm() {
    this.subscriptionForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  subscribe() {
    if (this.subscriptionForm.valid) {
      const email = this.subscriptionForm.get('email').value;

      this.subsribeService.subscribe(email)
        .then(message => console.log(message));
    }
  }
}
