import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { ApiExamplesComponent } from './api-examples.component';
import { CommonModule } from "@angular/common";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations:[ApiExamplesComponent],
  imports: [
    MatExpansionModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    CommonModule
  ],
  exports: [
    ApiExamplesComponent
    ]
})
export class APIExamplesModule { }
