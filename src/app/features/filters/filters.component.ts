import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { profiles } from '../../data/profiles.js';
import { filter } from './filters';

declare const noUiSlider;
declare const wNumb;

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @ViewChild('slider') slider: ElementRef;
  @ViewChild('slider2') slider2: ElementRef;

  private _profiles = profiles;
  public filteredProfiles = this._profiles;

  // The initial filter values
  public filterValues = {
    ages: {
      21: true,
      35: true,
      36: false
    },
    distance: 300,
    genders: {
      male: true,
      female: true
    },
    statuses: {
      friendship: true,
      dating: true,
      networking: true
    }
  };

  ngOnInit() {
    // Do the initial filter
    this.filter();
  }

  changeAge(event: Event) {
    this.filterValues.ages[event.target['id']] = event.target['checked'];
    this.filter();
  }

  changeDistance(event: Event) {
    this.filterValues.distance = +event.target['id'];
    this.filter();
  }

  changeGender(event: Event) {
    this.filterValues.genders[event.target['id']] = event.target['checked'];
    this.filter();
  }

  changeStatus(event: Event) {
    this.filterValues.statuses[event.target['id']] = event.target['checked'];
    this.filter();
  }

  // Filters profiles based on user input
  filter() {
    this.filteredProfiles = filter(
      this.filterValues.ages,
      this.filterValues.distance,
      this.filterValues.genders,
      this.filterValues.statuses,
      this._profiles
    )
  }
}
