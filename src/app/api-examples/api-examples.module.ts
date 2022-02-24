import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { ApiExamplesComponent } from './api-examples.component';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations:[ApiExamplesComponent],
  imports: [
    MatExpansionModule,
    CommonModule
  ],
  exports: [
    ApiExamplesComponent
    ]
})
export class APIExamplesModule { }
