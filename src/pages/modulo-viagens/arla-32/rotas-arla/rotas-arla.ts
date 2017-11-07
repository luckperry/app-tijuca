import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Slides } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-rotas-arla',
  templateUrl: 'rotas-arla.html',
})
export class RotasArlaPage {

  @ViewChild(Slides) slides: Slides;

  contador: number = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Rotas2Page');
  }

  toBack() {
    this.contador -= 1;
    this.slides.slidePrev(400)
    if (this.contador == 0) {
      this.navCtrl.pop();
    } 
  }

  toGo() {
    this.slides.slideTo(this.contador, 400)
    this.contador += 1;
    if (this.contador == 3) {

      let toast = this.toastCtrl.create({
        message: 'Arla32 adicionada com sucesso',
        duration: 5000
      });
      toast.present();

      this.navCtrl.pop();
    } 
  }

}
