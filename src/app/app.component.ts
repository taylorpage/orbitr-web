import { Component, OnInit } from '@angular/core';
import { MnFullpageOptions } from 'ngx-fullpage';
import { dropAnimations } from './animation/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: dropAnimations
})
export class AppComponent {

  public animations = {
    2: 'inactive',
    3: 'inactive',
    4: 'inactive',
    5: 'inactive',
    6: 'inactive'
  }

  public options: MnFullpageOptions = new MnFullpageOptions({
    navigation: true,
    navigationPosition: 'right',
    keyboardScrolling: true,
    onLeave: (index: number, nextIndex: number, direction: string): void => {
      this.animations[nextIndex] = 'active';
    }
  });

}
