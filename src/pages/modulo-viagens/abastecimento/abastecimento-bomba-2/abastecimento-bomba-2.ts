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
  ultimaFoto; 
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public viewCtrl: ViewController, public camera: Camera) {
  }

  getFoto(type) {
    
        const options: CameraOptions = {
          quality: 100,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE,
          sourceType: type == "picture" ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.SAVEDPHOTOALBUM,
          correctOrientation: true
        };
    
        this.camera.getPicture(options).then((imageData) => {
    
          this.ultimaFoto = 'data:image/jpeg;base64,' + imageData;
    
        }, (err) => {
          // Handle error
          console.log('Erro na última foto')
        });
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
