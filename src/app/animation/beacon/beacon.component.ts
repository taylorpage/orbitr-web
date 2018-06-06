import { Component, OnInit, ViewChild, ElementRef, HostListener, Input, EventEmitter } from '@angular/core';

// Animations
import { bounceAnimations } from '../animations';

// Services
import { AppService } from '../../shared/app.service';

@Component({
  selector: 'app-beacon',
  templateUrl: './beacon.component.html',
  styleUrls: ['./beacon.component.scss'],
  animations: bounceAnimations
})
export class BeaconComponent implements OnInit {

  @Input() beaconTrigger: EventEmitter<boolean>;

  public beacon = false;

  private animationDefault = this.appService.isMobileDevice ? 'active' : 'inactive';

  // Orb activation
  public all = this.animationDefault;
  public orbOne = this.animationDefault;
  public orbTwo = this.animationDefault;
  public orbThree = this.animationDefault;
  public orbFour = this.animationDefault;

  private orbTimeouts = {
    orbOne: null,
    orbTwo: null,
    orbThree: null,
    orbFour: null,
  }

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.subscribeToBeaconTrigger();
  }

  subscribeToBeaconTrigger() {
    this.beaconTrigger.subscribe(trigger => {
      if (trigger) {
        this.beacon = true;
        this.all = 'active';
        this.activateOrbs();
      } else {
        this.beacon = false;
        this.all = 'inactive';
        this.deactivateOrbs();
      }
    });
  }

  // Activates orb's visibility with time offset
  activateOrbs() {
    this.orbTimeouts.orbOne = setTimeout(() => {
      this.orbOne = 'active';
    }, 1600 );

    this.orbTimeouts.orbTwo = setTimeout(() => {
      this.orbTwo = 'active';
    }, 2000);

    this.orbTimeouts.orbThree = setTimeout(() => {
      this.orbThree = 'active';
    }, 3800);

    this.orbTimeouts.orbFour = setTimeout(() => {
      this.orbFour = 'active';
    }, 3000);
  }

  // Deactivates orb's visibility
  deactivateOrbs() {
    this.orbOne = 'inactive';
    this.orbTwo = 'inactive';
    this.orbThree = 'inactive';
    this.orbFour = 'inactive';

    Object.keys(this.orbTimeouts).forEach(orb => {
      clearTimeout(this.orbTimeouts[orb]);
      this.orbTimeouts[orb] = null;
    });
  }
}
