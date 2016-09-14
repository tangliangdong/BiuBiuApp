import {Component} from '@angular/core';
import {NavController,ModalController} from 'ionic-angular';

import {SettingPage} from '../about/setting';
import {LoginPage} from '../login/login';

@Component({
  templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {
  constructor(private navCtrl: NavController,
              private modalCtrl: ModalController) {
  }

  openSetting(){
    let settingModal = this.modalCtrl.create(SettingPage);
    settingModal.present();
  }

  openUserCenter(){
    let loginModal = this.modalCtrl.create(LoginPage);
    loginModal.present();
  }
}
