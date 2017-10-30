import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Arla322Page } from '../arla322/arla322';

@IonicPage()
@Component({
  selector: 'page-arla32',
  templateUrl: 'arla32.html',
})
export class Arla32Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 linkArla322(){
   this.navCtrl.push(Arla322Page);
 }

}
