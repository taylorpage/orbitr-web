import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { AppService } from '../../shared/app.service';
import { dropAnimations } from '../../animation/animations';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  animations: dropAnimations
})
export class LocationComponent {

  @ViewChild('locationElem') locationElem: ElementRef;
  public location = this.appService.isMobileDevice ? 'active' : 'inactive';

  constructor(
    private appService: AppService
  ) { }

  @HostListener('window:scroll', ['$event'])
  scroll(event) {
    if (this.appService.detectVisibleElement(this.locationElem)) {
      if (this.location === 'inactive') {
        this.location = 'active';
      }
    }
  }

}
