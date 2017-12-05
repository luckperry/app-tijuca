import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-abastecimento-odometro',
  templateUrl: 'abastecimento-odometro.html',
})
export class AbastecimentoOdometroPage {
  ultimaFoto;
  odometro;

  constructor(public navCtrl: NavController, public camera: Camera) {
  }

  valida() {
    
        if (this.odometro != undefined) {
          // console.log(this.validaPagamento);
          return true;
        }
        if (this.odometro == "") {
          // console.log(this.validaPagamento)
          return false;
        }
    
      }
}
