import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PodPageComponent } from './pod-page/pod-page.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'pod', component: PodPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
