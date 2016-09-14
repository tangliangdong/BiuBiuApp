import {Component,ViewChild} from '@angular/core';
import {NavController,Slides,Platform,ModalController} from 'ionic-angular';

import {LoginPage} from '../login/login';
@Component({
  templateUrl: 'build/pages/activity/activity.html'
})
export class ActivityPage {
  private isRotate = false;
  public addthree : any;
  public firstbtn : any;
  public secondbtn : any;
  public thirdbtn : any;
  public local : any;
  public user = {
    phoneNumber : '用户中心',
    register: '注册',
    doWhat: '1'
  };

  constructor(private navCtrl: NavController,
              platform: Platform,
              public modalCtrl: ModalController) {
    // if(localStorage.getItem('phoneNumber')==null) {
    //   let loginNav = this.navCtrl.push(LoginPage);
    // }else{
    //   // this.user.phoneNumber = localStorage.getItem('phoneNumber');
    //   // this.user.register = '';
    // }
    platform.ready().then((readySource) => {
      // Platform now ready, execute any required native code
      //this.slider.slideNext(300);
      //this.slider.slideNext(300,true);
      //console.log(this.slider.ionDidChange);
      //this.slider._proto_.slideTo(2, 500,false);
      this.addthree = document.getElementById('addthree');
      this.firstbtn = document.getElementById('firstbtn');
      this.secondbtn = document.getElementById('secondbtn');
      this.thirdbtn = document.getElementById('thirdbtn');
      if(localStorage.getItem('phoneNumber')!=null){
        this.user.phoneNumber = localStorage.getItem('phoneNumber');
        this.user.register = '';
      }
    });
  }

  openThree(){
    //console.log(this.firstbtn);
    if(!this.isRotate){
      this.isRotate = true;
      this.addthree.removeAttribute('addbtn-no-rotate');
      this.addthree.setAttribute('class',"addbtn-rotate");
      this.firstbtn.removeAttribute('nofirstbtn');
      this.secondbtn.removeAttribute('nosecondbtn');
      this.thirdbtn.removeAttribute('nothirdbtn');
      this.firstbtn.setAttribute('class','firstbtn');
      this.secondbtn.setAttribute('class','secondbtn');
      this.thirdbtn.setAttribute('class','thirdbtn');

    }else{
      this.isRotate = false;
      this.addthree.removeAttribute('addbtn-rotate');
      this.addthree.setAttribute('class',"addbtn-no-rotate");
      this.firstbtn.removeAttribute('firstbtn');
      this.secondbtn.removeAttribute('secondbtn');
      this.thirdbtn.removeAttribute('thirdbtn');
      this.firstbtn.setAttribute('class','nofirstbtn');
      this.secondbtn.setAttribute('class','nosecondbtn');
      this.thirdbtn.setAttribute('class','nothirdbtn');
    }
  }
  login(){
    let loginModal = this.modalCtrl.create(LoginPage);
    loginModal.onDidDismiss(data => {
      console.log(data);
      this.user.phoneNumber = data.phoneNumber;
      this.user.register = '';
    });
    loginModal.present();
  }
}
