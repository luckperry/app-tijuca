import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular'; 
import { ArlaPagPage } from '../arla-pag/arla-pag';


@IonicPage()
@Component({
  selector: 'arla-posto-page',
  templateUrl: 'arla-posto.html',
})
export class ArlaPostoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 
}
