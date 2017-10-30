import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

import { ViagensPage } from '../viagens/viagens';

@IonicPage()
@Component({
  selector: 'page-receitas3',
  templateUrl: 'receitas3.html',
})
export class Receitas3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
     public toastCtrl: ToastController) {
  }  
  showToast() {
      let toast = this.toastCtrl.create({
        message: 'Receita adicionada com sucesso',
        duration: 3000 
      });
      toast.present();
      this.navCtrl.setRoot(ViagensPage);
    }
}

