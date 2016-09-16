import {Component} from '@angular/core';
import {NavController,Platform,ModalController,ViewController,AlertController,ToastController,NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/login/register.html'
})
export class RegisterPage {
  public RegisterUser = {
    phoneNumber: '',
    password: '',
    comfirmPassword: '',
  };

  constructor(private navCtrl: NavController,
              public modalCtrl: ModalController,
              public viewCtrl: ViewController,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController,
              private params: NavParams) {

  }

  backToHome(){
    this.viewCtrl.dismiss();
  }
}
