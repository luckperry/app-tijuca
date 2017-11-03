import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { GeralPage } from '../geral/geral-page/geral-page';
<<<<<<< HEAD
import { DespesasPage } from '../despesas/despesas/despesas'; 
import { ArlaPostoPage } from '../arla-32/arla-posto/arla-posto';
=======
import { DespesasPage } from '../despesas/despesas/despesas';
import { RotasPage } from '../rotas/rotas';
import { RotasArlaPage } from '../arla-32/rotas-arla/rotas-arla';
>>>>>>> 1678c4be715a778823a3c0c1613d74a3873b57b9
import { ReceitasFornecedorPage } from '../receitas/receita-fornecedor/receita-fornecedor';
import { RotasAbastecimentoPage } from '../abastecimento/rotas-abastecimento/rotas-abastecimento';

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
    this.navCtrl.push(ReceitasFornecedorPage);
  }
  
  linkDespesas(){
      this.navCtrl.push(DespesasPage);
  }

  linkArla32(){
    this.navCtrl.push(RotasArlaPage);
  }

  linkGeral(){
    this.navCtrl.push(GeralPage);
  }

  linkAbastecimento(){
    this.navCtrl.push(RotasAbastecimentoPage);
  }

}
