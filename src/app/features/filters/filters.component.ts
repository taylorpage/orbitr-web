import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { dropAnimations } from '../../animation/animations';
import { AppService } from '../../shared/app.service';

declare const noUiSlider;
declare const wNumb;

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  animations: dropAnimations
})
export class FiltersComponent implements OnInit {

  @ViewChild('slider') slider: ElementRef;
  @ViewChild('slider2') slider2: ElementRef;
  @ViewChild('filtersElem') filtersElem: ElementRef;

  public filters = 'inactive';

  @HostListener('window:scroll', ['$event'])
  scroll(event) {
    if (this.appService.detectVisibleElement(this.filtersElem)) {
      if (this.filters === 'inactive') {
        this.filters = 'active';
      }
    }
  }

  public selectOptions = [
    'friendship',
    'dating',
    'events',
    'networking'
  ];

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.createNoUiSliders();
  }

  createNoUiSliders() {
    noUiSlider.create(this.slider.nativeElement, {
      start: [23, 45],
      connect: true,
      step: 1,
      range: { 'min': 18, 'max': 100 },
      format: {
        to: value => Math.ceil(value),
        from: value => Math.ceil(value),
      }
     });

    noUiSlider.create(this.slider2.nativeElement, {
      start: [100],
      step: 1,
      connect: true,
      range: { 'min': 0, 'max': 500 },
      format: {
        to: value => Math.ceil(value),
        from: value => Math.ceil(value),
      }
    });
  }
}
