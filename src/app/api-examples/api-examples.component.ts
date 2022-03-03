import { Component, ElementRef, Input, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { from, Observable } from 'rxjs';
import {MatExpansionPanel} from '@angular/material/expansion'
import { CatFact } from '../models/catFacts';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as THREE from "three";

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-api-examples',
  templateUrl: './api-examples.component.html',
  styleUrls: ['./api-examples.component.scss']
})
export class ApiExamplesComponent implements OnInit, AfterViewInit{
  books: any[];
  catData: any = '';
  randomActivity: any = '';
  bitcoinPrice: any = '';
  dogPicture: any = '';
  tiles: Tile[];

  //Three
  @ViewChild('canvas') private canvasRef: any = null;
  @Input() public RotationSpeedX: number = 0.03;
  @Input() public rotationSpeedY: number = 0.02;
  @Input() public size: number = 200;
  @Input() public texture: string = "/assets/texture.jpg";
  @Input() public cameraZ: number = 400;
  @Input() public fieldOfView: number = 1;
  @Input('nearClipping') public nearClippingPlane: number = 1;
  @Input('farClipping') public farClippingPlane: number = 1000;

  // Helper Three properties
  private camera!: THREE.PerspectiveCamera;
  private get canvas () : HTMLCanvasElement {
      return this.canvasRef.nativeElement;
  }
  private loader = new THREE.TextureLoader ();
  private geometry = new THREE.BoxGeometry (2, 2, 2);
  private material = new THREE.MeshBasicMaterial({ map: this.loader.load(this.texture) });
  private cube: THREE.Mesh = new THREE.Mesh(this.geometry, this.material);
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;


  // catData: Observable<CatFact>;
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  constructor(private http: HttpClient){

    this.tiles = [
      {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
      {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
      {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
      {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    ];

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

/**
  *Create the scene
  * @private
  * @memberof ApiExamplesComponent
*/
private createScene () {
//* Scene
this.scene = new THREE.Scene();
this.scene.background = new THREE.Color('white')
this.scene.add(this.cube) ;
//*Camera
let aspectRatio = this.getAspectRatio();
this.camera = new THREE.PerspectiveCamera(
this.fieldOfView,
aspectRatio,
this.nearClippingPlane,
this.farClippingPlane
)
this.camera.position.z = this.cameraZ;
}

private getAspectRatio () {
  return this.canvas.clientWidth / this.canvas.clientHeight;
}

/**
 * 
 * Animate the cube
 * @private
 * @memberof ApiExamplesComponent
 */
private animateCube(){
  this.cube.rotation.x += this.RotationSpeedX;
  this.cube.rotation.y += this.rotationSpeedY;
}

/**
*Start the rendering loop
*@private
*@memberof ApiExamplesComponent
*/
private startRenderingLoop () {
//* Renderer
// Use canvas element in template
this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
this.renderer.setPixelRatio(devicePixelRatio);
this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

let component: ApiExamplesComponent = this;
(function render () {
requestAnimationFrame(render);
component.animateCube() ;
component.renderer.render(component.scene, component.camera);
}());
}

//API's
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

  ngAfterViewInit(){
    console.log('test');
    this.createScene();
    this.startRenderingLoop();
  }

 

}
