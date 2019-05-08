import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Inicio',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Catálogo',
      url: '/catalogo',
      icon: 'ios-nutrition'
    },
    {
      title:'Gallinero',
      url: '/gallinero',
      icon: 'md-egg'
    },
    {
      title:'Instrucciones',
      url:'/instrucciones',
      icon:'ios-construct'
    },
    {
      title:'Calendario',
      url:'/calendario',
      icon:'md-calendar'
    },
    {
      title:'¿Quiénes somos?',
       url:'/quienes',
       icon:'ios-contact'

    },
  
    
    
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
