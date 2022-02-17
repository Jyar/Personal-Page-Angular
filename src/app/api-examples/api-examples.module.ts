import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { ApiExamplesComponent } from './api-examples.component';

@NgModule({
  declarations:[ApiExamplesComponent],
  imports: [
    MatExpansionModule
  ],
  exports: [
    ApiExamplesComponent
    ]
})
export class APIExamplesModule { }
