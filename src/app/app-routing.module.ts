import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroesComponent } from './heroes/heroes.component';
import { NewHeroAddressComponent } from './new-hero-address/new-hero-address.component';
import { NewHeroComponent } from './new-hero/new-hero.component';

const routes: Routes = [
  {path:"",redirectTo:"/dashboard",pathMatch:"full"},
  {path:"heroes",component:HeroesComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"search",component:HeroSearchComponent},
  {path:"newHero",component:NewHeroComponent},
  {path:"detail/:id",component:HeroDetailsComponent},
  {path:"address",component:NewHeroAddressComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
