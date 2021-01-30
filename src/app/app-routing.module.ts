import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './base-components/landing-page/landing-page.component';
import { PodPageComponent } from './pod/pod-page/pod-page.component';
import { PodListingComponent } from './pod/pod-listing/pod-listing.component';
import { PodsResolve } from 'src/resolvers/pods.resolve';
import { PodTypesResolve } from 'src/resolvers/podtype.resolve';


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
    path: 'vertuo',
    component: PodListingComponent,
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
