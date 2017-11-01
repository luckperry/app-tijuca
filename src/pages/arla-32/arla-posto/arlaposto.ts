import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular'; 
import { ArlapagPage } from '../arla-pag/arlapag';


@IonicPage()
@Component({
  selector: 'page-arlaposto',
  templateUrl: 'arlaposto.html',
})
export class ArlapostoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  linkArlaPage(){
    this.navCtrl.push(ArlapagPage);
  }
}
