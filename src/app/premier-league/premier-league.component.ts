import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import * as _ from 'lodash';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-premier-league',
  templateUrl: './premier-league.component.html',
  styleUrls: ['./premier-league.component.scss']
})
export class PremierLeagueComponent implements OnInit {
private encryptedMessage: string = '';
private decryptedMessage: string = '';
numbers: any = '';

  constructor() { }

  ngOnInit(): void {
    this.encrypt();
    of('1', '2', '3').pipe(map(x => ' next number: ' + x)).subscribe(result => {
      this.numbers = result;
      console.log(this.numbers)
    }); // etc
  }

  encrypt() {
  }

}
