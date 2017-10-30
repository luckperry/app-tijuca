import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Abastecimento4Page } from "../abastecimento4/abastecimento4";
/**
 * Generated class for the Abastecimento3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-abastecimento3',
  templateUrl: 'abastecimento3.html',
})
export class Abastecimento3Page {
  preco;
  litros;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  b(){
    this.navCtrl.push(Abastecimento4Page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Abastecimento3Page');
  }

}
