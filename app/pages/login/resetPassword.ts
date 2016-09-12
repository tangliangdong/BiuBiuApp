import {Component} from '@angular/core';
import {NavController,Platform,ModalController,ViewController,AlertController,ToastController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/login/resetPassword.html'
})
export class ResetPasswordPage {
  public user = {
    phoneNumber : '',
    register: '',
    depositStartTime: '',
    depositFinishTime: '',
    depositBaggageAmount: '',
  };

  constructor(private navCtrl: NavController,
              public modalCtrl: ModalController,
              public viewCtrl: ViewController,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController) {

  }

  backToHome(){
    this.viewCtrl.dismiss();
  }
}
