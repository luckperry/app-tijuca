import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Slides } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-rotas-arla',
  templateUrl: 'rotas-arla.html',
})
export class RotasArlaPage {

  @ViewChild(Slides) slides: Slides;

  contador: number = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
      this.navCtrl.pop();
    } 
  }

}
