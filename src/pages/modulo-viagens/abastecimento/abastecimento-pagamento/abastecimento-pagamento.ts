import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-abastecimento-pagamento',
  templateUrl: 'abastecimento-pagamento.html',
})
export class AbastecimentoPagamentoPage {
  pagamento;
  data;
  tipo;
  campo;
  posto;
  validaPagamento: boolean;
  teste;

  constructor(public navCtrl: NavController) {

  }



   valida() {

    if (this.posto != undefined && this.tipo != undefined && this.pagamento != undefined && this.data != undefined) {
      this.validaPagamento = true;
      // console.log(this.validaPagamento);
      return true;
    }
    if (this.posto == "" || this.tipo == "" || this.pagamento == "" || this.data == "") {
      this.validaPagamento = false;
      // console.log(this.validaPagamento)
      return false;
    }

  }

  ngAfterViewInit(){
    this.teste = this.valida()
  }


}
