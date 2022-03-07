import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PremierLeagueComponent } from './premier-league/premier-league.component';
import { ApiExamplesComponent } from './api-examples/api-examples.component';
import { HomepageComponent } from './homepage/homepage.component';

const appRoutes: Routes = [
  {
    path: 'premierLeagueAPI',
    component: PremierLeagueComponent

  },
  {
    path: 'apiExamples',
    component: ApiExamplesComponent

  },
  {
    path: '',
    component: HomepageComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
    ]
})
export class AppRoutingModule { }
