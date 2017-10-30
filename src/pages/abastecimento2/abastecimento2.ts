import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Abastecimento3Page} from '../abastecimento3/abastecimento3'
/**
 * Generated class for the Abastecimento2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-abastecimento2',
  templateUrl: 'abastecimento2.html',
})
export class Abastecimento2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  bomba(){
    this.navCtrl.push(Abastecimento3Page);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Abastecimento2Page');
  }

}
