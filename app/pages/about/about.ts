import {Component} from '@angular/core';
import {NavController,ModalController} from 'ionic-angular';

import {SettingPage} from '../about/setting';
import {LoginPage} from '../login/login';

import {MyPublishPage} from '../about/myPublish';
import {MyAttendPage} from '../about/myAttend';
import {MyCollectPage} from '../about/myCollect';
import {MyWalletPage} from '../about/myWallet';

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

  open(word){
    switch (word) {
      case "myPublish":
        let publishModal = this.modalCtrl.create(MyPublishPage);
        publishModal.present();
        break;
      case "myAttend":
        let attendModal = this.modalCtrl.create(MyAttendPage);
        attendModal.present();
        break;
      case "myCollect":
        let collectModal = this.modalCtrl.create(MyCollectPage);
        collectModal.present();
        break;
      case "myWallet":
        let walletModal = this.modalCtrl.create(MyWalletPage);
        walletModal.present();
        break;
      case "setting":
        let settingModal = this.modalCtrl.create(SettingPage);
        settingModal.present();
        break;
    }
  }
}
