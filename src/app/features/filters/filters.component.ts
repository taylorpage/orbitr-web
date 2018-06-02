import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { dropAnimations } from '../../animation/animations';
import { AppService } from '../../shared/app.service';
import { profiles } from '../../data/profiles.js';
import { filter } from './filters';

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

  public filters = this.appService.isMobileDevice ? 'active' : 'inactive';

  private _profiles = profiles;
  public filteredProfiles = this._profiles;

  public selectOptions = [
    'any',
    'friendship',
    'dating',
    'events',
    'networking'
  ];

  // The initial filter values
  public filterValues = {
    age: [18, 100],
    distance: 500,
    gender: 'any',
    status: 'any'
  };

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.createNoUiSliders();

    // Do the initial filter
    this.filter();
  }

  // Creates the initial sliders
  createNoUiSliders() {

    // Creates the age slider
    noUiSlider.create(this.slider.nativeElement, {
      start: [this.filterValues.age[0], this.filterValues.age[1]],
      connect: true,
      step: 1,
      range: { 'min': 18, 'max': 100 },
      format: {
        to: value => Math.ceil(value),
        from: value => Math.ceil(value),
      }
     });

    // Creates the distance slider
    noUiSlider.create(this.slider2.nativeElement, {
      start: [this.filterValues.distance],
      step: 1,
      connect: true,
      range: { 'min': 0, 'max': 500 },
      format: {
        to: value => Math.ceil(value),
        from: value => Math.ceil(value),
      }
    });

    // Listen for value changes in sliders
    this.observeSliders();
  }

  // Listens for value changes
  observeSliders() {
    this.slider.nativeElement.noUiSlider.on('change', () => {
      const age = this.slider.nativeElement.noUiSlider.get();
      this.filterValues.age = age;
      this.filter();
    });

    this.slider2.nativeElement.noUiSlider.on('change', () => {
      const distance = this.slider2.nativeElement.noUiSlider.get();
      this.filterValues.distance = distance;
      this.filter();
    });
  }

  changeGender(event: Event) {
    this.filterValues.gender = event.target['id'];
    this.filter();
  }

  changeStatus(event: Event) {
    this.filterValues.status = event.target['value'];
    this.filter();
  }

  // Filters profiles based on user input
  filter() {
    this.filteredProfiles = filter(
      this.filterValues.age,
      this.filterValues.distance,
      this.filterValues.gender,
      this.filterValues.status,
      this._profiles
    )
  }
}
