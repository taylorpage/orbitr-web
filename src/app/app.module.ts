import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';

import { MaterializeModule } from 'angular2-materialize';
import { MainComponent } from './main/main.component';
import { SubscribeModalComponent } from './subscribe-modal/subscribe-modal.component';
import { LocationComponent } from './features/location/location.component';
import { BeaconComponent } from './animation/beacon/beacon.component';
import { FiltersComponent } from './features/filters/filters.component';
import { MessagesComponent } from './features/messages/messages.component';
import { MobileComponent } from './features/mobile/mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SubscribeModalComponent,
    LocationComponent,
    BeaconComponent,
    FiltersComponent,
    MessagesComponent,
    MobileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
