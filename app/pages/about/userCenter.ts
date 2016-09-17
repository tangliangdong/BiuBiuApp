import {Component} from '@angular/core';
import {NavController,ViewController,AlertController,ToastController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/about/userCenter.html'
})
export class UserCenterPage {
  public user = {
    username : '',
    phoneNumber : ''
  }
  public showUser = {
    username: '未登录',
    signature: ''
  }

  constructor(private navCtrl: NavController,
              private viewCtrl: ViewController,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController) {
    if(localStorage.getItem('username') != null){
      this.user.username = localStorage.getItem('username');
      this.user.phoneNumber = localStorage.getItem('phoneNumber');
    }
  }

  backToHome(){
    if(localStorage.getItem('username') != null){
      this.showUser.username = localStorage.getItem('username');
      this.showUser.signature = localStorage.getItem('signature');
    }
    this.viewCtrl.dismiss(this.showUser);
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
            localStorage.removeItem('signature');

            setTimeout(() =>{
              this.viewCtrl.dismiss(this.showUser);
            }, 2000);
          }
        }
      ]
    });
    cancelAlert.present();
  }
}
