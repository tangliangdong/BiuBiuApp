import {Component} from '@angular/core';
import {NavController,ViewController,AlertController,ToastController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/activity/publishingActivity.html'
})
export class PublishingActivityPage {
  public publishActivity = {
    title: '',
    phoneNumber: '',
    startTime: '',
    endTime: '',
    site: '',
    personAmount: '',
  }
  constructor(private navCtrl: NavController,
              private viewCtrl: ViewController,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController) {

  }

  backToHome(){
    this.viewCtrl.dismiss();
  }
  submit(){
    if(this.publishActivity.title == '' ||
       this.publishActivity.phoneNumber == '' ||
       this.publishActivity.startTime == '' ||
       this.publishActivity.endTime == '' ||
       this.publishActivity.site == '' ||
       this.publishActivity.personAmount == ''){
      let remindToast = this.toastCtrl.create({
        message: '请把信息填写完毕',
        position: 'top',
        duration: 3000,
      });
      remindToast.present();
    }else{
      let submitAlert = this.alertCtrl.create({
        title: '确认发出活动吗？',
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
              setTimeout(() =>{
                this.viewCtrl.dismiss();
              }, 1000);
            }
          }
        ]
      });
      submitAlert.present();
    }
  }
}
