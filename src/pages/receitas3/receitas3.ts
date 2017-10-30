import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { ViagensPage } from '../viagens/viagens';

@IonicPage()
@Component({
  selector: 'page-receitas3',
  templateUrl: 'receitas3.html',
})
export class Receitas3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }


  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Adicionado',
      subTitle: 'Receita Adicionadas',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.push(ViagensPage);
  }

}
