import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  public modalEmitter: EventEmitter<string> = new EventEmitter<string>();
  public subscribed = false;

  constructor(
    private http: Http
  ) { }

  subscribe(email: string) {
    return this.http.post('http://127.0.0.1:8080/subscribe', { email: email })
      .toPromise()
      .then(res => {
        this.modalEmitter.emit('success');
        this.subscribed = true;
        return res;
      })
      .catch(err => console.log(err));
  }

  openModal() {
    this.modalEmitter.emit('open');
  }

  closeModal() {
    this.modalEmitter.emit('close');
  }
}
