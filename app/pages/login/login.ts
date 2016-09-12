import {Component,ViewChild} from '@angular/core';
import {NavController,ModalController,Platform,ViewController,LoadingController,ToastController} from 'ionic-angular';

import {ResetPasswordPage} from '../login/resetPassword';
import {RegisterPage} from '../login/register';


@Component({
  templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {

  private loginImg : any;
  public user = {
    phoneNumber : '',
    password : ''
  };
  private userPassword : any;

  constructor(private navCtrl: NavController,
              platform: Platform,
              private modalCtrl: ModalController,
              public viewCtrl: ViewController,
              private loadingCtrl: LoadingController,
              private toastCtrl: ToastController) {
    platform.ready().then((readySource) => {

    });
  }
  //定位图标跳动进入效果
  onPageWillEnter(){
    this.userPassword = document.getElementById('userPassword').getElementsByTagName('input');
    this.loginImg = document.getElementById('loginImg');
    this.loginImg.className += ' animated bounceIn';
    //this.loginImg.setAttribute('class','animated bounceIn login-img');
  }
  //登录账号
  doLogin(){
    if(this.user.phoneNumber == '110' && this.user.password =='110' ){
      let loadingLogin = this.loadingCtrl.create({
        content: '正在登陆',
        spinner: 'ios',
        duration: 2000
      });
      localStorage.setItem('phoneNumber',this.user.phoneNumber);
      loadingLogin.present();
      setTimeout(()=>{
        loadingLogin.dismiss();
      },2000);
      setTimeout(() =>{
        this.viewCtrl.dismiss(this.user);
      }, 3000);
    }else if( this.user.phoneNumber == '' || this.user.password ==''){
      let toastError = this.toastCtrl.create({
        message: '手机号或密码不能为空',
        duration: 3000,
        position: 'top'
      });
      toastError.present();
    }else{
      let toastError = this.toastCtrl.create({
        message: '手机号或密码错误',
        duration: 3000,
        position: 'top'
      });
      toastError.onDidDismiss(() => {
        this.userPassword[0].value = '';
      });
      toastError.present();
    }
  }
  //跳转注册页面
  doRegister(){
    let register = this.modalCtrl.create(RegisterPage);
    register.present();
  }
  //忘记密码，跳转到找回密码页面
  findPassword(){
    let findPasswordModal = this.modalCtrl.create(ResetPasswordPage);
    findPasswordModal.present();
  }
}
