import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';


@IonicPage()
@Component({
  selector: 'page-rotas-abastecimento',
  templateUrl: 'rotas-abastecimento.html',
})
export class RotasAbastecimentoPage {
  @ViewChild(Slides) slides: Slides;

  public contador: number = 1;
  cameraButton: boolean;
  ultimaFoto: string;
  exibirImagem: boolean;



  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public toastCtrl: ToastController,
    public camera: Camera) {} 

 
  toBack() {
    this.contador -= 1;
    this.slides.slidePrev(400)
    if (this.contador == 0) {
      this.navCtrl.pop();
    }

    if(this.contador == 3 || this.contador == 4){
      this.cameraButton = true;
    }else{
      this.cameraButton = false;
    }
  }

  toGo() {
    this.slides.slideTo(this.contador, 400)
    this.contador += 1;
    if (this.contador == 5) {

      let toast = this.toastCtrl.create({
        message: 'Abastecimento adicionada com sucesso',
        duration: 2000
      });
      toast.present();
      this.navCtrl.pop();
    }

    if(this.contador == 3 || this.contador == 4){
      this.cameraButton = true;
    }else{
      this.cameraButton = false;
    }
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
    
        this.exibirImagem = true;
        console.log("O metodo foi acionado")
    
        this.camera.getPicture(options).then((imageData) => {
    
          this.ultimaFoto = 'data:image/jpeg;base64,' + imageData;
    
        }, (err) => {
          // Handle error
          console.log('Erro na última foto')
        });
      }


}
