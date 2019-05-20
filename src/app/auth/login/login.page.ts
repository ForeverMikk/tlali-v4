import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MenuController, AlertController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userD: any = {};

  constructor(private storage: Storage, public alert: AlertController, public toast: ToastController, public router: Router, public menu: MenuController, private auth: AuthService) { }
  ngOnInit() { }

  ionViewWillEnter() {
    this.menu.enable(false);
  }

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

  login() {
    this.auth.login(this.userD).subscribe(res => {
      if (res.estado == false) {
        this.presentAlert(res.detalle);
      } else {
        this.storage.set('id', res.id);
        this.presentToast(res.detalle);
        this.router.navigate(['/home']);
        this.menu.enable(true);
      }
    });
  }

}
