import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PrincipalPage } from '../pages/principal/principal';
import { ViagensPage } from '../pages/viagens/viagens';
import { ReceitasPage } from '../pages/receitas/receitas';
import { Receitas2Page } from '../pages/receitas2/receitas2';
import { Receitas3Page } from '../pages/receitas3/receitas3';
import { DespesasPage } from '../pages/despesas/despesas';
import { Arla322Page } from '../pages/arla322/arla322';
import { Arla32Page } from '../pages/arla32/arla32';
 
import { AbastecimentoPage } from '../pages/abastecimento/abastecimento';
import { Abastecimento2Page } from '../pages/abastecimento2/abastecimento2';
import { Abastecimento3Page } from '../pages/abastecimento3/abastecimento3';
import { Abastecimento4Page } from '../pages/abastecimento4/abastecimento4';
import { RotasPage } from '../pages/rotas/rotas';


import { GeralPage } from '../pages/geral/geral-page/geral-page';
import { GeralDadosViagemPage } from '../pages/geral/geral-dados-viagem/geral-dados-viagem';
import { GeralDadosMotoristaPage } from '../pages/geral/geral-dados-motorista/geral-dados-motorista';

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
    Arla32Page,
    Arla322Page,
    GeralPage,
    AbastecimentoPage,
    Abastecimento2Page,
    Abastecimento3Page,
    Abastecimento4Page,
    RotasPage,
    GeralDadosViagemPage,
    GeralDadosMotoristaPage
    
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
    Arla32Page,
    Arla322Page,
    GeralPage,
    AbastecimentoPage,
    Abastecimento2Page,
    Abastecimento3Page,
    Abastecimento4Page,
    RotasPage,
    GeralDadosViagemPage,
    GeralDadosMotoristaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
