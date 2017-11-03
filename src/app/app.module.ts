import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/modulo-viagens/home/home/home';
import { PrincipalPage } from '../pages/principal/principal/principal';
import { ViagensPage } from '../pages/modulo-viagens/viagens/viagens';
import { ReceitasFornecedorPage } from '../pages/modulo-viagens/receitas/receita-fornecedor/receita-fornecedor';
import { ReceitasQntPage } from '../pages/modulo-viagens/receitas/receitas-qnt/receitas-qnt';
import { ReceitasFotoPage } from '../pages/modulo-viagens/receitas/receitas-foto/receitas-foto';

import { GeralPage } from '../pages/modulo-viagens/geral/geral-page/geral-page';
import { GeralDadosViagemPage } from '../pages/modulo-viagens/geral/geral-dados-viagem/geral-dados-viagem';
import { GeralDadosMotoristaPage } from '../pages/modulo-viagens/geral/geral-dados-motorista/geral-dados-motorista';
import { DespesasPage } from '../pages/modulo-viagens/despesas/despesas/despesas';

import { AbastecimentoPagamentoPage } from '../pages/modulo-viagens/abastecimento/abastecimento-pagamento/abastecimento-pagamento';
import { AbastecimentoOdometroPage } from '../pages/modulo-viagens/abastecimento/abastecimento-odometro/abastecimento-odometro';
import { AbastecimentoBomba1Page } from '../pages/modulo-viagens/abastecimento/abastecimento-bomba-1/abastecimento-bomba-1';
import { AbastecimentoBomba2Page } from '../pages/modulo-viagens/abastecimento/abastecimento-bomba-2/abastecimento-bomba-2';
<<<<<<< HEAD
import { RotasAbastecimentoPage } from '../pages/modulo-viagens/abastecimento/rotas-abastecimento/rotas-abastecimento';
 
=======

import { RotasPage } from '../pages/modulo-viagens/rotas/rotas';
import { RotasArlaPage } from '../pages/modulo-viagens/arla-32/rotas-arla/rotas-arla';


>>>>>>> 1678c4be715a778823a3c0c1613d74a3873b57b9
import { ArlaPagPage } from '../pages/modulo-viagens/arla-32/arla-pag/arla-pag';
import { ArlaPostoPage } from '../pages/modulo-viagens/arla-32/arla-posto/arla-posto';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PrincipalPage,
    ViagensPage,
    ReceitasFornecedorPage,
    ReceitasQntPage,
    ReceitasFotoPage,
    DespesasPage, 
    GeralPage,
    AbastecimentoPagamentoPage,
    AbastecimentoOdometroPage,
    AbastecimentoBomba1Page,
    AbastecimentoBomba2Page,
<<<<<<< HEAD
    RotasAbastecimentoPage, 
=======
    RotasPage,
    RotasArlaPage,
>>>>>>> 1678c4be715a778823a3c0c1613d74a3873b57b9
    GeralDadosViagemPage,
    GeralDadosMotoristaPage,
    ArlaPagPage,
    ArlaPostoPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp) 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PrincipalPage,
    ViagensPage,
    ReceitasFornecedorPage,
    ReceitasQntPage,    
    ReceitasFotoPage,
    DespesasPage,
    GeralPage,
    AbastecimentoPagamentoPage,
    AbastecimentoOdometroPage,
    AbastecimentoBomba1Page,
<<<<<<< HEAD
    RotasAbastecimentoPage, 
=======
    AbastecimentoBomba2Page,
    RotasPage,
    RotasArlaPage,
>>>>>>> 1678c4be715a778823a3c0c1613d74a3873b57b9
    GeralDadosViagemPage,
    GeralDadosMotoristaPage,
    ArlaPagPage,
    ArlaPostoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}