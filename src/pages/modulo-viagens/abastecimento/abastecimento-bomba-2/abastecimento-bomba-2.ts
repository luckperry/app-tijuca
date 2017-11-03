import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular'; 

@IonicPage()
@Component({
  selector: 'page-abastecimento-bomba-2',
  templateUrl: 'abastecimento-bomba-2.html',
})
export class AbastecimentoBomba2Page {

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
