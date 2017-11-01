import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ReceitasPage } from '../receitas/receitas';
import { DespesasPage } from '../despesas/despesas/despesas';
import { GeralPage } from '../geral/geral';
import { RotasPage } from '../rotas/rotas';
import { ArlapostoPage } from '../arla-32/arla-posto/arlaposto';

@IonicPage()
@Component({
  selector: 'page-viagens',
  templateUrl: 'viagens.html',
})
export class ViagensPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViagensPage');
  }

  linkReceitas(){
    this.navCtrl.push(ReceitasPage);
  }
  
  linkDespesas(){
      this.navCtrl.push(DespesasPage);
  }

  linkArla32(){
    this.navCtrl.push(ArlapostoPage);
  }

  linkGeral(){
    this.navCtrl.push(GeralPage);
  }

  linkAbastecimento(){
    this.navCtrl.push(RotasPage);
  }

}
