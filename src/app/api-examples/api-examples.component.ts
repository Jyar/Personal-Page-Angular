import { Component, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import {MatExpansionPanel} from '@angular/material/expansion'


@Component({
  selector: 'app-api-examples',
  templateUrl: './api-examples.component.html',
  styleUrls: ['./api-examples.component.scss']
})
export class ApiExamplesComponent{

  @ViewChild(MatAccordion) accordion!: MatAccordion;

}
