import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  userD: any = {};

  constructor(public router: Router, public toast: ToastController, public alert: AlertController, private auth: AuthService) { }
  ngOnInit() { }

  async presentAlert(mess: any) {
    const al = await this.alert.create({
      header: 'Atencion',
      subHeader: 'Nesesitas lo Siguiente',
      message: mess,
      buttons: ['OK']
    });
    await al.present();
  }

  async presentToast(mess) {
    const to = await this.toast.create({
      message: mess,
      duration: 2000,
      position: 'top'
    });
    to.present();
  }

  register() {
    this.auth.register(this.userD).subscribe(res => {
      if (res.estado == false) {
        this.presentAlert(res.detalle);
      } else {
        this.presentToast(res.detalle);
        this.router.navigate(['/login']);
      }
    });
  }

}
