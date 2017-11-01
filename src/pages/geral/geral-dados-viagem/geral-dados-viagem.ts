import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViagensPage } from '../../viagens/viagens';


@IonicPage()
@Component({
  selector: 'geral-dados-viagem',
  templateUrl: 'geral-dados-viagem.html',
})
export class GeralDadosViagemPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  } 
}
