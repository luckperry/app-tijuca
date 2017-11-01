import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ReceitasQntPage } from '../receitas-qnt/receitas-qnt';

@IonicPage()
@Component({
  selector: 'page-receita-fornecedor',
  templateUrl: 'receita-fornecedor.html',
})
export class ReceitasFornecedorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReceitasPage');
  }
  linkReceitas2(){
    this.navCtrl.push(ReceitasQntPage);
  }

}
