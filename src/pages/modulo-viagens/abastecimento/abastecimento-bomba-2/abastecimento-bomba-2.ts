import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular'; 
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-abastecimento-bomba-2',
  templateUrl: 'abastecimento-bomba-2.html',
})
export class AbastecimentoBomba2Page {
  preco;
  litros;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public viewCtrl: ViewController, public camera: Camera) {
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
