import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-floating-chat',
  templateUrl: './floating-chat.component.html',
  styleUrls: ['./floating-chat.component.scss']
})
export class FloatingChatComponent implements OnInit {
  timer: number = 0;
  timer2: number = 0;
  timer3: number = 0;
  floatingTextOpacity: number = 1;
  floatingTextStyle: string = 'block';
  floatingLogoStyle: string = '';

  @ViewChild('floatingButton') floating_button!: ElementRef;  
    
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
          //remove the class after 5 seconds
          this.collapseButton();
        }, 5000);
  }

  

   collapseButton(){
     console.log('out ' + this.floating_button);
    this.floating_button.nativeElement.classList.add('collapse-button');
    this.floatingTextOpacity = 0;
    this.floatingTextStyle = 'none';
    this.floatingLogoStyle = "auto";
  }

   openButton(){

      console.log('in');
      this.floatingTextStyle = 'block';
      setTimeout(() => {
          this.floatingTextOpacity = 1;
        }, 500);
      this.floatingLogoStyle = '';
      this.floating_button.nativeElement.classList.remove('collapse-button');
  }

  changeFloatingLogoStyle(){
    let styles = {
    'margin': this.floatingLogoStyle
  };
  return styles;
  }

  changeFloatingTextStyle(){
    let styles = {
    'opacity': this.floatingTextOpacity,
    'display': this.floatingTextStyle
  };
  return styles;
  }

}
