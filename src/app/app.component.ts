import { Component, OnInit, EventEmitter } from '@angular/core';
import { MnFullpageOptions } from 'ngx-fullpage';
import { dropAnimations } from './animation/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: dropAnimations
})
export class AppComponent {

  public beaconAnimationTrigger: EventEmitter<boolean> = new EventEmitter<boolean>();
  public messageAnimationTrigger: EventEmitter<boolean> = new EventEmitter<boolean>();

  public animations = {
    2: 'inactive',
    3: 'inactive',
    4: 'inactive',
    5: 'inactive',
    6: 'inactive',
    7: 'inactive'
  }

  public options: MnFullpageOptions = new MnFullpageOptions({
    navigation: true,
    navigationPosition: 'right',
    keyboardScrolling: true,
    onLeave: (index: number, nextIndex: number, direction: string): void => {
      this.animations[nextIndex] = 'active';

      this.triggerBeacon(nextIndex);
      this.triggerMessages(nextIndex);
    }
  });

  triggerBeacon(componentIndex: number) {
    // Trigger beacon when location component is scrolled
    if (componentIndex === 3) {
      this.beaconAnimationTrigger.emit(true);
    } else if (componentIndex === 2 || componentIndex === 4) {
      this.beaconAnimationTrigger.emit(false);
    }
  }

  triggerMessages(componentIndex: number) {
    // Trigger message when message component is scrolled
    if (componentIndex === 5) {
      this.messageAnimationTrigger.emit(true);
    } else if (componentIndex === 4 || componentIndex === 6) {
      this.messageAnimationTrigger.emit(false);
    }
  }
}
