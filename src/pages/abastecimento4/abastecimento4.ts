import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ViagensPage } from "../viagens/viagens";

/**
 * Generated class for the Abastecimento4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-abastecimento4',
  templateUrl: 'abastecimento4.html',
})
export class Abastecimento4Page {

  preco;
  litros;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public viewCtrl: ViewController) {
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso',
      subTitle: 'Abastecimento Cadastrado',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.first();
  }

}
