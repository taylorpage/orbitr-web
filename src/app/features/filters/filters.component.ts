import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare const noUiSlider;

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @ViewChild('slider') slider: ElementRef;

  constructor() { }

  ngOnInit() {
    this.createNoUiSlider();
  }

  createNoUiSlider() {
    noUiSlider.create(this.slider.nativeElement, {
      start: [0, 100],
      connect: true,
      step: 1,
      range: {
        'min': 0,
        'max': 100
      }
     });
  }
}
