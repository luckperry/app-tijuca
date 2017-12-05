import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-abastecimento-bomba-1',
  templateUrl: 'abastecimento-bomba-1.html',
})
export class AbastecimentoBomba1Page {
  preco;
  litros;

  constructor(public navCtrl: NavController, public navParams: NavParams, public camera: Camera) {
  }

  valida() {

    if (this.preco != undefined && this.litros != undefined) {
      return true;
    }
    if (this.preco == "" || this.litros == "") {
      return false;
    }

  }

}
