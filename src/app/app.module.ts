import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home/home';
import { PrincipalPage } from '../pages/principal/principal/principal';
import { ViagensPage } from '../pages/viagens/viagens';
import { ReceitasPage } from '../pages/receitas/receitas';
import { Receitas2Page } from '../pages/receitas2/receitas2';
import { Receitas3Page } from '../pages/receitas3/receitas3';

import { GeralPage } from '../pages/geral/geral-page/geral-page';
import { GeralDadosViagemPage } from '../pages/geral/geral-dados-viagem/geral-dados-viagem';
import { GeralDadosMotoristaPage } from '../pages/geral/geral-dados-motorista/geral-dados-motorista';
import { DespesasPage } from '../pages/despesas/despesas/despesas';

import { AbastecimentoPagamentoPage } from '../pages/abastecimento/abastecimento-pagamento/abastecimento-pagamento';
import { AbastecimentoOdometroPage } from '../pages/abastecimento/abastecimento-odometro/abastecimento-odometro';
import { AbastecimentoBomba1Page } from '../pages/abastecimento/abastecimento-bomba-1/abastecimento-bomba-1';
import { AbastecimentoBomba2Page } from '../pages/abastecimento/abastecimento-bomba-2/abastecimento-bomba-2';

import { RotasPage } from '../pages/rotas/rotas';
import { ArlaPagPage } from '../pages/arla-32/arla-pag/arla-pag';
import { ArlaPostoPage } from '../pages/arla-32/arla-posto/arla-posto';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PrincipalPage,
    ViagensPage,
    ReceitasPage,
    Receitas2Page,
    Receitas3Page,
    DespesasPage, 
    GeralPage,
    AbastecimentoPagamentoPage,
    AbastecimentoOdometroPage,
    AbastecimentoBomba1Page,
    AbastecimentoBomba2Page,
    RotasPage,
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
    ReceitasPage,
    Receitas2Page,    
    Receitas3Page,
    DespesasPage,
    GeralPage,
    AbastecimentoPagamentoPage,
    AbastecimentoOdometroPage,
    AbastecimentoBomba1Page,
    RotasPage,
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