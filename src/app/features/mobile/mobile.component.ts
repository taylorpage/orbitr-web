import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';
import { AppService } from '../../shared/app.service';
import { dropAnimations } from '../../animation/animations';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss'],
  animations: dropAnimations
})
export class MobileComponent {

  @ViewChild('mobileElem') mobileElem: ElementRef;
  public mobile = this.appService.isMobileDevice ? 'active' : 'inactive';

  constructor(
    private appService: AppService
  ) { }

  @HostListener('window:scroll', ['$event'])
  scroll(event) {
    if (this.appService.detectVisibleElement(this.mobileElem)) {
      if (this.mobile === 'inactive') {
        this.mobile = 'active';
      }
    }
  }
}
