import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor(
    private http: Http
  ) { }

  subscribe(email: string) {
    return this.http.post('SERVER_API', { email: email })
      .toPromise()
      .then(res => res)
      .catch(err => console.log(err));
  }
}
