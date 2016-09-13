import {Component} from '@angular/core';
import {NavController,ViewController,NavParams,AlertController,ToastController,ModalController } from 'ionic-angular';

import {TransmitPage} from '../transmit/transmit'
@Component({
  templateUrl: 'build/pages/home/userActivity.html'
})
export class UserActivityPage {
  public activity : any;

  constructor(private navCtrl: NavController,
              private viewCtrl: ViewController,
              params: NavParams,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController,
              private modalCtrl: ModalController) {
    this.activity = params.get('activity');
  }
  //返回主页面
  backToHome(){
    this.viewCtrl.dismiss();
  }
  //点击加入活动按钮
  attendActivity(){
    let alertAttend = this.alertCtrl.create({
      title:"确定加入这个活动吗？",
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
          let toast = this.toastCtrl.create({
            message: '成功参加活动',
            duration: 3000,
            position: 'top'
          });
        }
      }
    ]
    });
    alertAttend.present();
  }
  //转发操作
  transmit(){
    let transmitModal = this.modalCtrl.create(TransmitPage);
    transmitModal.present();
  }
}
