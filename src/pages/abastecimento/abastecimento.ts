import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Abastecimento2Page } from "../abastecimento2/abastecimento2";

@IonicPage()
@Component({
  selector: 'page-abastecimento',
  templateUrl: 'abastecimento.html',
})
export class AbastecimentoPage {


  pagamento;
  data;
  tipo;
  posto;

    
  // abastecimento(){
  //   this.navCtrl.push(Abastecimento2Page);
  // }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbastecimentoPage');
  }

}
