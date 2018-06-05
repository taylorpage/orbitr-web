import { Component } from '@angular/core';
import { MnFullpageOptions } from 'ngx-fullpage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  public options: MnFullpageOptions = new MnFullpageOptions({
    navigation: true,
    navigationPosition: 'right',
    keyboardScrolling: true
  });
}
