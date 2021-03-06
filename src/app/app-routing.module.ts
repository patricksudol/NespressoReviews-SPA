import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './base-components/landing-page/landing-page.component';
import { PodPageComponent } from './pod/pod-page/pod-page.component';
import { PodListingComponent } from './pod/pod-listing/pod-listing.component';
import { PodsResolve } from 'src/resolvers/pods.resolve';
import { PodTypesResolve } from 'src/resolvers/podtype.resolve';
import { VertuoPodsResolve } from 'src/resolvers/vertuopods.resolve';
import { OriginalPodsResolve } from 'src/resolvers/originalpods.resolve';


const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    resolve: {
      pods: PodsResolve,
      podtypes: PodTypesResolve
    }
  },
  {
    path: 'original',
    component: PodListingComponent,
    resolve: {
      pods: OriginalPodsResolve
    }
  },
  {
    path: 'vertuo',
    component: PodListingComponent,
    resolve: {
      pods: VertuoPodsResolve
    }
  },
  {
    path: 'pod/:id',
    component: PodPageComponent
  },
  { path: '**', component: LandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
