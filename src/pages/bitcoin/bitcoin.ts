import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { BitcoinProvider } from "../../providers/bitcoin/bitcoin";
import { Observable } from "rxjs";
import { Bitcoin } from '../../models/bitcoin.model'

@IonicPage()
@Component({
  selector: 'page-bitcoin',
  templateUrl: 'bitcoin.html',
})
export class BitcoinPage {
  currency: string ='GBP';
  // A global variable with '$' means taht this is an observable
  bitcoin$: Observable<Bitcoin>;
  constructor(private bitcoinProvider: BitcoinProvider) {

  }

  ionViewWillLoad(){
    // Get the currency price
    this.getBitcoinPrice();
  }

  getBitcoinPrice(){
    this.bitcoin$ = this.bitcoinProvider.getBitcoinPrice(this.currency);
  }

}
