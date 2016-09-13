import {Component} from '@angular/core';
import {NavController,ViewController,AlertController,ToastController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/transmit/transmit.html'
})
export class TransmitPage {
  /*public shareBtn = [
    {'title': '微信朋友圈','img': 'pengyouquan.png'},
    {'title': '微信朋友','img': 'images.png'},
    {'title': '新浪微博','img': 'db99c5084e.png'},
    {'title': 'QQ空间','img': 'qzone2.png'},
    {'title': 'QQ好友','img': 'qq-new-logo.png'},
  ];*/
  public weixin = {
    title: '微信朋友圈',img: 'pengyouquan.png'
  }
  public circleFriends = {
    title: '微信朋友',img: 'images.png'
  }
  public microblog = {
    title: '新浪微博',img: 'db99c5084e.png'
  }
  public QQzone = {
    title: 'QQ空间',img: 'qzone2.png'
  }
  public QQfriends = {
    title: 'QQ好友',img: 'qq-new-logo.png'
  }

  constructor(private navCtrl: NavController,
              private viewCtrl: ViewController,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController) {
  }

  comeBack(){
    this.viewCtrl.dismiss();
  }

  shareToOther(object){
    console.log(object);
    let shareAlert = this.alertCtrl.create({
      title: '分享',
      message: '是否分享至' + object.title,
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: () => {

          }
        },
        {
          text: '确定',
          handler: () => {
            let shareToast = this.toastCtrl.create({
              message: '成功分享至' + object.title,
              duration: 3000,
              position: 'top'
            });
            shareToast.present();
          }
        }
      ]
    });
    shareAlert.present();
  }
}
