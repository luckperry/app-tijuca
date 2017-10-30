import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ViagensPage } from '../viagens/viagens';
import { Geral2Page } from '../geral2/geral2';
import { Geral3Page } from '../geral3/geral3';

 

@IonicPage()
@Component({
  selector: 'page-geral',
  templateUrl: 'geral.html',
})
export class GeralPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  } 

  geral2 = Geral2Page;
  geral3 = Geral3Page;
}