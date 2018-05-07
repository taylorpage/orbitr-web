import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

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

  @ViewChild('beaconElement') beaconElement: ElementRef;

  @HostListener('window:scroll', ['$event']) 
  scroll(event) {
    if (this.appService.detectVisibleElement(this.beaconElement)) {
      if (!this.beacon) {
        this.beacon = true;
        this.all = 'active';
        this.activateOrbs();
        this.activateSpeechBubbles();
      }
    } else {
      if (this.beacon) {
        this.beacon = false;
        this.all = 'inactive';
        this.deactivateOrbs();
        this.deactivateBubbles();
      }
    }
  }

  public beacon = false;

  // Orb activation
  public all = 'inactive';
  public orbOne = 'inactive';
  public orbTwo = 'inactive';
  public orbThree = 'inactive';
  public orbFour = 'inactive';

  private orbTimeouts = {
    orbOne: null,
    orbTwo: null,
    orbThree: null,
    orbFour: null,
  }

  // Speech bubble activation
  public bubbleOne = 'inactive';
  public bubbleTwo = 'inactive';
  public bubbleThree = 'inactive';
  public bubbleFour = 'inactive';

  private bubbleTimeouts = {
    bubbleOne: null,
    bubbleTwo: null,
    bubbleThree: null,
    bubbleFour: null,
  }

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {}
  
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

  // Activates speech bubble's visability
  // NOTE: Orbs appearance ends after 3800ms
  activateSpeechBubbles() {
    this.bubbleTimeouts.bubbleOne = setTimeout(() => {
      this.bubbleOne = 'active';
    }, 4200);

    this.bubbleTimeouts.bubbleTwo = setTimeout(() => {
      this.bubbleTwo = 'active';
    }, 4500);

    this.bubbleTimeouts.bubbleThree = setTimeout(() => {
      this.bubbleThree = 'active';
    }, 5100);

    this.bubbleTimeouts.bubbleFour = setTimeout(() => {
      this.bubbleFour = 'active';
    }, 4900);
  }

  // Deactivates speech bubble's visability
  deactivateBubbles() {
    this.bubbleOne = 'inactive';
    this.bubbleTwo = 'inactive';
    this.bubbleThree = 'inactive';
    this.bubbleFour = 'inactive';

    Object.keys(this.bubbleTimeouts).forEach(bubble => {
      clearTimeout(this.bubbleTimeouts[bubble]);
      this.bubbleTimeouts[bubble] = null;
    });
  }
}
