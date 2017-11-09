import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Slides } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-rotas-abastecimento',
  templateUrl: 'rotas-abastecimento.html',
})
export class RotasAbastecimentoPage {
  @ViewChild(Slides) slides: Slides;

  public contador: number = 1;



  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {} 

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad RotasPage');
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
    if (this.contador == 5) {

      let toast = this.toastCtrl.create({
        message: 'Abastecimento adicionada com sucesso',
        duration: 2000
      });
      toast.present();
      this.navCtrl.pop();
    }
  }

}
