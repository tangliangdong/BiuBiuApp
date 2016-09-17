import {Component} from '@angular/core';
import {NavController,ViewController,NavParams,AlertController,ToastController,ModalController,Platform  } from 'ionic-angular';

import {TransmitPage} from '../transmit/transmit'
@Component({
  templateUrl: 'build/pages/home/userActivity.html'
})
export class UserActivityPage {
  public activity : any;
  public isClick = false;
  private collectBtn : any;

  constructor(private navCtrl: NavController,
              private viewCtrl: ViewController,
              params: NavParams,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController,
              private modalCtrl: ModalController,
              platform: Platform) {
    this.activity = params.get('activity');
    platform.ready().then((readySource) => {
      this.collectBtn = document.getElementById('collectId');
      console.log(this.collectBtn);
      console.log(document.getElementById('collectId'));

    });
  }
  //返回主页面
  backToHome(){
    this.viewCtrl.dismiss();
  }
  collect(){
    if(!this.isClick){
      this.isClick = true;
      this.collectBtn.className += ' collect';
      let CollectToast = this.toastCtrl.create({
        message: '已收藏',
        position: 'top',
        duration: 3000
      });
      CollectToast.present();
    }else{
      this.isClick = false;
      this.collectBtn.className = this.collectBtn.className.replace('collect', '');
      let CollectToast = this.toastCtrl.create({
        message: '取消收藏',
        position: 'top',
        duration: 3000
      });
      CollectToast.present();
    }

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
          toast.present();
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
