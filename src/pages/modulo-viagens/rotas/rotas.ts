import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViagensPage } from '../viagens/viagens';

/**
 * Generated class for the RotasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rotas',
  templateUrl: 'rotas.html',
})
export class RotasPage {

  abastecimento: boolean = true
  abastecimento2: boolean = false;
  abastecimento3: boolean = false;
  abastecimento4: boolean = false;



  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RotasPage');
  }

  linkVoltar() {
    this.navCtrl.push(ViagensPage)
  }

}
