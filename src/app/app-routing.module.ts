import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApiExamplesComponent } from './api-examples/api-examples.component';
import { HomepageComponent } from './homepage/homepage.component';

const appRoutes: Routes = [
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
