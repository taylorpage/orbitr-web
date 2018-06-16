import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { MnFullpageModule } from 'ngx-fullpage';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { MainComponent } from './main/main.component';
import { SubscribeModalComponent } from './subscribe/subscribe-modal/subscribe-modal.component';
import { LocationComponent } from './features/location/location.component';
import { BeaconComponent } from './animation/beacon/beacon.component';
import { FiltersComponent } from './features/filters/filters.component';
import { MessagesComponent } from './features/messages/messages.component';
import { MobileComponent } from './features/mobile/mobile.component';
import { SubscribeMainComponent } from './subscribe/subscribe-main/subscribe-main.component';
import { SubscribeFormComponent } from './subscribe/subscribe-form/subscribe-form.component';
import { VideoComponent } from './video/video.component';
import { ModalComponent } from './core/modal/modal.component';

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
    MobileComponent,
    SubscribeMainComponent,
    SubscribeFormComponent,
    VideoComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterializeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MnFullpageModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
