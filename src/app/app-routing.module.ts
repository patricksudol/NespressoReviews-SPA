import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './base-components/landing-page/landing-page.component';
import { PodPageComponent } from './pod/pod-page/pod-page.component';
import { PodListingComponent } from './pod/pod-listing/pod-listing.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'vertuo', component: PodListingComponent },
  { path: 'pod', component: PodPageComponent },
  { path: '**', component: LandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
