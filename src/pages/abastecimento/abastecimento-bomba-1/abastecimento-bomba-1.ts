import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AbastecimentoBomba2Page } from "../abastecimento-bomba-2/abastecimento-bomba-2";

@IonicPage()
@Component({
  selector: 'page-abastecimento-bomba-1',
  templateUrl: 'abastecimento-bomba-1.html',
})
export class AbastecimentoBomba1Page {
  preco;
  litros;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  b(){
    this.navCtrl.push(AbastecimentoBomba2Page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Abastecimento3Page');
  }

}
