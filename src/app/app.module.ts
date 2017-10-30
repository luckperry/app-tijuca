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
import { GeralPage } from '../pages/geral/geral'; 
import { AbastecimentoPage } from '../pages/abastecimento/abastecimento';
import { Abastecimento2Page } from '../pages/abastecimento2/abastecimento2';
import { Abastecimento3Page } from '../pages/abastecimento3/abastecimento3';
import { Abastecimento4Page } from '../pages/abastecimento4/abastecimento4';
import { RotasPage } from '../pages/rotas/rotas';
import { Geral2Page } from '../pages/geral2/geral2';
import { Geral3Page } from '../pages/geral3/geral3';

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
    Geral2Page,
    Geral3Page
    
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
    Geral2Page,
    Geral3Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
