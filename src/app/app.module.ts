import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';

import {IvyCarouselModule} from 'angular-responsive-carousel';
import { PodTileComponent } from './pod-tile/pod-tile.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RatingModule } from 'ng-starrating';
import { PodPageComponent } from './pod-page/pod-page.component';
import { NgxGalleryModule } from 'ngx-gallery-9';
import { ReviewComponent } from './review/review.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    PodTileComponent,
    LandingPageComponent,
    PodPageComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    RatingModule,
    NgxGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
