import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';

import {IvyCarouselModule} from 'angular-responsive-carousel';
import { PodTileComponent } from './pod-tile/pod-tile.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RatingStarsComponent } from './rating-stars/rating-stars.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    PodTileComponent,
    LandingPageComponent,
    RatingStarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
