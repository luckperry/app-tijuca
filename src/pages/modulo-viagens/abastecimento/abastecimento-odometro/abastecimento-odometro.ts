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
  kmRodados;

  constructor(public navCtrl: NavController, public camera: Camera) {
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


  ionViewDidLoad() {
    console.log('ionViewDidLoad Abastecimento2Page');
  }

}
