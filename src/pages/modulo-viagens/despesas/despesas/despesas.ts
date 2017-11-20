import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-despesas',
  templateUrl: 'despesas.html',
})
export class DespesasPage {
  valor;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public toastCtrl: ToastController) {
  }

  showAlert() {
    
    let toast = this.toastCtrl.create({
      message: 'Gastos adicionado com sucesso',
      duration: 2000
    });
    toast.present();
    
    this.navCtrl.pop();
  } 
  invenTA: any = "R$" + this.valor;

}
