import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './base-components/top-nav/top-nav.component';

import {IvyCarouselModule} from 'angular-responsive-carousel';
import { PodTileComponent } from './pod/pod-tile/pod-tile.component';
import { LandingPageComponent } from './base-components/landing-page/landing-page.component';
import { RatingModule } from 'ng-starrating';
import { PodPageComponent } from './pod/pod-page/pod-page.component';
import { NgxGalleryModule } from 'ngx-gallery-9';
import { ReviewComponent } from './review/review.component';
import { PodListingComponent } from './pod/pod-listing/pod-listing.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { StarsRatingComponent } from './base-components/stars-rating/stars-rating.component';
import { StringFilterPipe } from './pipes/string-filter.pipe';
import { ReviewEditorComponent } from './review-editor/review-editor.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    PodTileComponent,
    LandingPageComponent,
    PodPageComponent,
    ReviewComponent,
    PodListingComponent,
    StarsRatingComponent,
    StringFilterPipe,
    ReviewEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    RatingModule,
    NgxGalleryModule,
    // TODO: Add wrapper component for pagination controls
    NgxPaginationModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
