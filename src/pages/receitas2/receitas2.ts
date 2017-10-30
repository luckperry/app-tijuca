import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Receitas3Page } from '../receitas3/receitas3';

/**
 * Generated class for the Receitas2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-receitas2',
  templateUrl: 'receitas2.html',
})
export class Receitas2Page {

  idUnidadeMedida: string;
  valorUnitario: number;
  qntDescarregado: number;
  a: number;
  
  preco(){
    return  this.valorUnitario * this.qntDescarregado
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  apareceBandeja() {
    if (this.idUnidadeMedida == 'bd') {
      return true;
    } else {
      return false;
    }
  }

  apareceCaixa() {
    if (this.idUnidadeMedida == 'cx') {
      return true;
    } else {
      return false;
    }
  }

  linkReceitas3() {
    this.navCtrl.push(Receitas3Page);
  }
}
