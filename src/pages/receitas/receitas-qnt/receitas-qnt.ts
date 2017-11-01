import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReceitasFotoPage } from '../receitas-foto/receitas-foto';

@IonicPage()
@Component({
  selector: 'page-receitas-qnt',
  templateUrl: 'receitas-qnt.html',
})
export class ReceitasQntPage {

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
    this.navCtrl.push(ReceitasFotoPage);
  }
}
