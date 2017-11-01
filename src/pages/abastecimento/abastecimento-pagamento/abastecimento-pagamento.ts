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
  posto;

    
  // abastecimento(){
  //   this.navCtrl.push(Abastecimento2Page);
  // }

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbastecimentoPage');
  }

}
