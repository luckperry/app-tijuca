import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, ToastController } from 'ionic-angular';
import { FotoServicoProvider } from '../../../../providers/foto-servico/foto-servico';


@IonicPage()
@Component({
  selector: 'page-rotas-receitas',
  templateUrl: 'rotas-receitas.html',
})
export class RotasReceitasPage {

  @ViewChild(Slides) slides: Slides;

  contador: number = 1;
  cameraButton: boolean; 
  fotoReceitas: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public foto: FotoServicoProvider) {
  }


  ngAfterViewInit(){
    this.slides.lockSwipes(true);
  }

  toBack() {
    this.slides.lockSwipes(false);
    this.contador -= 1;
    this.slides.slidePrev(400)
    if (this.contador == 2) {
      this.cameraButton = true;
    } else {
      this.cameraButton = false;
    }
    if (this.contador == 0) {
      this.navCtrl.pop();
    }
    this.slides.lockSwipes(true);
  }

  toGo() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(this.contador, 400)
    this.contador += 1;
    if (this.contador == 4) {

      let toast = this.toastCtrl.create({
        message: 'Receita adicionada com sucesso',
        duration: 2000
      });
      toast.present();

      this.navCtrl.pop();
    }
    if (this.contador == 2) {
      this.cameraButton = true;
    } else {
      this.cameraButton = false;
    }
    this.slides.lockSwipes(true);
  }  
  mostrar(){
    
        this.foto.getFoto('picture')
        .then(responses => {
        
          if (this.contador == 2 ){
            this.fotoReceitas = this.foto.ultimaFoto;
            console.log(this.fotoReceitas);}
          })    
        }
}
