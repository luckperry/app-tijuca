import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-abastecimento-odometro',
  templateUrl: 'abastecimento-odometro.html',
})
export class AbastecimentoOdometroPage {
  odometro: string = "";

  constructor(public navCtrl: NavController, public camera: Camera) {
  }

  valida() {
    
        if (this.odometro == "") {
          return false;
        }else{
          return true;
        }
        
    
      }
}
