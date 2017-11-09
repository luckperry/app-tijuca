import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-abastecimento-pagamento',
  templateUrl: 'abastecimento-pagamento.html',
})
export class AbastecimentoPagamentoPage {
  pagamento;
  data;
  tipo;
  campo;
  
  myModel: any;

  constructor(public navCtrl: NavController) {
    this.myModel = {};

   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbastecimentoPage');
  }

}
