import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-premier-league',
  templateUrl: './premier-league.component.html',
  styleUrls: ['./premier-league.component.scss']
})
export class PremierLeagueComponent implements OnInit {
private encryptedMessage: string = '';
private decryptedMessage: string = '';

  constructor() { }

  ngOnInit(): void {
    this.encrypt();
  }

  encrypt() {
  }

}
