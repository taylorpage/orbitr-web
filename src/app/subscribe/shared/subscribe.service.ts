import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  public modalEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private http: Http
  ) { }

  subscribe(email: string) {
    return this.http.post('SERVER_API', { email: email })
      .toPromise()
      .then(res => res)
      .catch(err => console.log(err));
  }

  openModal() {
    this.modalEmitter.emit('open');
  }

  closeModal() {
    this.modalEmitter.emit('close');
  }
}
