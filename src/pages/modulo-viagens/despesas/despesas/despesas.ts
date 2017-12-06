import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-despesas',
  templateUrl: 'despesas.html',
})
export class DespesasPage {
  
  despesa: string = "";
  data: string = "" ;
  valor: string = "" ;
  
  public contador: number = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public toastCtrl: ToastController) {
  }

  ngAfterViewInit() {
    (true);

    if (this.contador == 1) {
      return this.valida();
    }
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

  valida() {
    
        if (this.despesa == "" || this.data == "" || this.valor == "") {
          return false;
        } else {
          return true;
        }
    
      }

}
