import {Component,ViewChild} from '@angular/core';
import {NavController,ModalController,Platform,ViewController,LoadingController,ToastController} from 'ionic-angular';

import {ResetPasswordPage} from '../login/resetPassword';
import {RegisterPage} from '../login/register';

@Component({
  templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {

  private loginImg : any;
  public allUser = [
    {username: 'BiuBiu官方',phone: '10086', password: '10086',signature: '发起组队活动,新的生活体验',img: 'xingkong.jpg'},
    {username: '小唐',phone: '100', password: '100',signature: 'Hello ionic',img: 'mingren.jpg'}
  ]
  public loginUser = {
    phoneNumber : '',
    password : '',
    username : '未登录',
    signature: '',
  };
  private userPassword : any;
  private canLogin = false;
  public checked = true;
  private loginBtn : any;

  constructor(private navCtrl: NavController,
              platform: Platform,
              private modalCtrl: ModalController,
              public viewCtrl: ViewController,
              private loadingCtrl: LoadingController,
              private toastCtrl: ToastController) {
    platform.ready().then((readySource) => {
      this.loginBtn = document.getElementById('loginBtn');
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
    if( this.loginUser.phoneNumber == '' || this.loginUser.password ==''){
      let toastError = this.toastCtrl.create({
        message: '手机号或密码不能为空',
        duration: 3000,
        position: 'top'
      });
      toastError.present();
    }else{
      for (var data in this.allUser) {
        if(this.allUser[data].phone == this.loginUser.phoneNumber &&
          this.allUser[data].password == this.loginUser.password){
          this.canLogin = true;
          this.loginUser.signature = this.allUser[data].signature;
          this.loginUser.username = this.allUser[data].username;
          let loadingLogin = this.loadingCtrl.create({
            content: '正在登陆',
            spinner: 'ios',
            duration: 2000
          });
          localStorage.setItem('phoneNumber',this.loginUser.phoneNumber);
          localStorage.setItem('username',this.loginUser.username);
          localStorage.setItem('signature',this.loginUser.signature);
          loadingLogin.present();
          setTimeout(()=>{
            loadingLogin.dismiss();
          },2000);
          setTimeout(() =>{
            this.viewCtrl.dismiss(this.loginUser);
          }, 3000);
          break;
        }
      }
      if(this.canLogin == false){
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


    /*if(this.loginUser.phoneNumber == '110' && this.loginUser.password =='110' ){

    }else else{
      let toastError = this.toastCtrl.create({
        message: '手机号或密码错误',
        duration: 3000,
        position: 'top'
      });
      toastError.onDidDismiss(() => {
        this.userPassword[0].value = '';
      });
      toastError.present();
    }*/
  }
  serviceBtn(){
    if(this.checked){
      this.checked = false;
      this.loginBtn.disabled = true;
    }else{
      this.checked = true;
      this.loginBtn.disabled = false;
    }
  }
  //跳转注册页面
  doRegister(){
    let registerModal = this.modalCtrl.create(RegisterPage);
    registerModal.onDidDismiss(data=>{

    });
    registerModal.present();
  }
  //忘记密码，跳转到找回密码页面
  findPassword(){
    let findPasswordModal = this.modalCtrl.create(ResetPasswordPage);
    findPasswordModal.present();
  }
  backToHome(){
    this.loginUser.username = '未登录';
    this.loginUser.signature = '';
    this.viewCtrl.dismiss(this.loginUser);
  }
}
