import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular'; 
import { ViagensPage } from '../../viagens/viagens';

@IonicPage()
@Component({
  selector: 'page-arlapag',
  templateUrl: 'arlapag.html',
})
export class ArlapagPage {

  litros: number;
  litro: number;
  total: number;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public alertCtrl: AlertController) {
  }
  preco(){
    return this.litros * this.litro;
  }
 
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Adicionado',
      subTitle: 'Arla32 Adicionado',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.push(ViagensPage);
  }
}
