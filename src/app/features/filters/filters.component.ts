import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { dropAnimations } from '../../animation/animations';
import { AppService } from '../../shared/app.service';
import { profiles } from '../../data/profiles.js';
import { genderFilter } from './filters';

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

  @HostListener('window:scroll', ['$event'])
  scroll(event) {
    if (this.appService.detectVisibleElement(this.filtersElem)) {
      if (this.filters === 'inactive') {
        this.filters = 'active';
      }
    }
  }

  public filters = 'inactive';

  private _profiles = profiles;
  public filteredProfiles = this._profiles;

  public selectOptions = [
    'any',
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

  // Creates the initial sliders
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

  // Filters profiles based on user input
  filter(event: any, prop?: string, val?: number | number[]) {
    if (prop === 'gender') {

      // The id is based off of the value
      const gender = event.target.id;
      this.filteredProfiles = genderFilter(gender, this._profiles);
    }
  }
}
