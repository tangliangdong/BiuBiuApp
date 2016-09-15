import {Component} from '@angular/core';
import {NavController,ViewController,ModalController,AlertController,ToastController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/about/setting.html'
})
export class SettingPage {
  constructor(private navCtrl: NavController,
              private viewCtrl: ViewController,
              private modalCtrl: ModalController,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController) {
  }

  backToHome(){
    this.viewCtrl.dismiss();
  }

  cancel(){
    let cancelAlert = this.alertCtrl.create({
      title: '确定要退出吗？',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '确定',
          handler: () => {
            localStorage.removeItem('phoneNumber');
            localStorage.removeItem('username');
            let comfirmCancelToast = this.toastCtrl.create({
              message: '您已成功退出登录',
              duration: 3000,
              position: 'top'
            });
            comfirmCancelToast.present();
          }
        }
      ]
    });
    cancelAlert.present();
  }
}
