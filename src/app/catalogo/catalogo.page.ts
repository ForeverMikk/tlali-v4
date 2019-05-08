import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {

  constructor(private navCtrl: NavController) {
    
   }

  ngOnInit() {
  }
  enviar_zana(){
    this.navCtrl.navigateForward('/zanahoria');
  }
  enviar_papa(){
    this.navCtrl.navigateForward('/papa');
  }

  enviar_cebolla(){
    this.navCtrl.navigateForward('/cebolla')
  }
  enviar_ajo(){
    this.navCtrl.navigateForward('/ajo');
  }
  enviar_acelga(){
    this.navCtrl.navigateForward('/acelga');
  }
  enviar_albahaca(){
    this.navCtrl.navigateForward('/albahaca');
  }
  enviar_cilantro(){
    this.navCtrl.navigateForward('/cilantro');
  }
  enviar_hierbabuena(){
    this.navCtrl.navigateForward('/hierbabuena');
  }
  enviar_perejil(){
    this.navCtrl.navigateForward('/perejil');
  }
  enviar_frijol(){
    this.navCtrl.navigateForward('/frijol');
  }
  enviar_lenteja(){
    this.navCtrl.navigateForward('/lenteja');
  }
  enviar_garbanzo(){
    this.navCtrl.navigateForward('/garbanzo');
  }
  enviar_pimiento(){
    this.navCtrl.navigateForward('/pimiento');
  }
  enviar_chicharo(){
    this.navCtrl.navigateForward('/chicharo');
  }
  enviar_calabaza(){
    this.navCtrl.navigateForward('/calabaza');
  }



}
