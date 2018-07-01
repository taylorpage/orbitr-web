import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  public seconds = 5;
  public interval = setInterval(this.redirectCountdown.bind(this), 1000);

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectCountdown() {
    if (this.seconds > 1) {
      this.seconds--;
    } else {
      clearInterval(this.interval);
      this.router.navigate(['/']);
    }
  }

}
