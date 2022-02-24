import { Component, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { from, Observable } from 'rxjs';
import {MatExpansionPanel} from '@angular/material/expansion'
import { CatFact } from '../models/catFacts';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-api-examples',
  templateUrl: './api-examples.component.html',
  styleUrls: ['./api-examples.component.scss']
})
export class ApiExamplesComponent{
  books: any[];
  catData: any;
  randomActivity: any;
  bitcoinPrice: any;
  dogPicture: any;
  // catData: Observable<CatFact>;
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  constructor(private http: HttpClient){
    this.books = [
      {
        "id": 1,
        "title": "Super Man"
      },
      {
        "id": 2,
        "title": "Spider Man"
      },
      {
        "id": 3,
        "title": "Aladdin"
      }, 
      {
        "id": 4,
        "title": "Downton Abbey"
      }
    ];

    this.getCatFacts().subscribe(data => {
      console.log(
       this.catData = JSON.parse(data).fact
        );
    });

    //randomActivity
    this.getRandomActivity().subscribe(data => {
      console.log(
       this.randomActivity = JSON.parse(data).activity
        );
    });
    
    //getUSData
    this.getBitcoinPrice().subscribe(data => {
      console.log(
       this.bitcoinPrice = JSON.parse(data)
        );
    });

    //getDogPicture
    this.getDogPicture().subscribe(data => {
      console.log(
       this.dogPicture = JSON.parse(data)
        );
    });

  }

  getCatFacts(){
      const requestOptions: Object = {
        observe: "body",
        responseType: "text"
      };
      return this.http
        .get<any>('https://catfact.ninja/fact', requestOptions);   
  }

  getRandomActivity(){
    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };
    return this.http
      .get<any>('https://www.boredapi.com/api/activity', requestOptions);   
}

getBitcoinPrice(){
  const requestOptions: Object = {
    observe: "body",
    responseType: "text"
  };
  return this.http
    .get<any>('https://api.coindesk.com/v1/bpi/currentprice.json', requestOptions);   
}


getDogPicture(){
  const requestOptions: Object = {
    observe: "body",
    responseType: "text"
  };
  return this.http
    .get<any>('https://dog.ceo/api/breeds/image/random', requestOptions);   
}

  trackByBookCode(index: number, book: any): string {
    return book.title;
  }

  ngOnInit(){

  }

 

}
