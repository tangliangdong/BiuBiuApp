import {Component,ViewChild} from '@angular/core';
import {NavController,Slides,Platform,ModalController,AlertController} from 'ionic-angular';

import {LoginPage} from '../login/login';
import {PublishingActivityPage} from '../activity/publishingActivity';

import {UserActivityPage} from '../home/userActivity';

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

  public activitys = [
    {'number':1,'title':'文一美食节','time':'5月29日6:30','site':'文一校区科大食苑三楼','img':'activity2.png','initiator':'BiuBiu官方','phoneNumber': 10086,'availablePerson':100},
    {'number':2,'title':'以行筑梦，匠心青年','time':'5月31日晚6:00','site':'学活剧场','img':'activity3.jpg','initiator':'小唐','phoneNumber': 100,'availablePerson':40},
    {'number':3,'title':'"告别文一大型晚会"','time':'6月5日晚上6:30','site':'杭电文一校区足球场','img':'activity1.png','initiator':'BiuBiu官方','phoneNumber': 10086,'availablePerson':64}
  ];

  constructor(private navCtrl: NavController,
              platform: Platform,
              public modalCtrl: ModalController,
              private alertCtrl: AlertController) {
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

  threebtn(number){
    switch (number) {
      case 1:
        if(localStorage.getItem('phoneNumber') != null){
          let publishModal = this.modalCtrl.create(PublishingActivityPage);
          publishModal.present();
        }else{
          let loginALert = this.alertCtrl.create({
          title: '请登录再查看详细信息',
          buttons: [
          {
            text: '取消',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: '去登录',
            handler: () => {
              let dologinModal = this.modalCtrl.create(LoginPage);
              dologinModal.present();
            }
          }
        ]
      });
      loginALert.present();
        }

        break;
      case 2:

        break;
      case 3:

        break;
    }
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
      this.user.phoneNumber = data.phoneNumber;
      this.user.register = '';
    });
    loginModal.present();
  }
  itemSelected(activity){
    if(localStorage.getItem('phoneNumber') == null){
      let loginALert = this.alertCtrl.create({
        title: '请登录再查看详情',
        buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '去登录',
          handler: () => {
            let dologinModal = this.modalCtrl.create(LoginPage);
            dologinModal.present();
          }
        }
      ]
      });
      loginALert.present();
    }else{
      let UserActivityModal = this.modalCtrl.create(UserActivityPage,{
        activity: activity
      });
      UserActivityModal.present();
    }
  }
}
