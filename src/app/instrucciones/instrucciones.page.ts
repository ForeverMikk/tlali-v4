import { Component, OnInit, } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-instrucciones',
  templateUrl: './instrucciones.page.html',
  styleUrls: ['./instrucciones.page.scss'],
})
export class InstruccionesPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }
  async sabias(){
    const alert = await  this.alertController.create({
      header: '¿Sabías qué?',
      message: 'La mayoría de las hierbas medicinales y plantas aromáticas sirven para el control de plagas de insectos en el huerto.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
