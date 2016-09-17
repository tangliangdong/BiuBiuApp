import {Component} from '@angular/core';
import {NavController,ModalController} from 'ionic-angular';

import {SettingPage} from '../about/setting';
import {LoginPage} from '../login/login';

import {MyPublishPage} from '../about/myPublish';
import {MyAttendPage} from '../about/myAttend';
import {MyCollectPage} from '../about/myCollect';
import {MyWalletPage} from '../about/myWallet';
import {UserCenterPage} from '../about/userCenter';

@Component({
  templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {
  public showUser = {
    username: '未登录',
    signature: ''
  }
  public user = {
    username: '',
    phoneNumber: -1,
  }
  public transmitData = {
    publishUser: '',
    publishUserPhone: '',

  }
  public activitys = [
    {'number':1,'title':'文一美食节','time':'5月29日6:30','site':'文一校区科大食苑三楼','img':'activity2.png','initiator':'BiuBiu官方','phoneNumber': 10086 ,'availablePerson':100},
    {'number':2,'title':'以行筑梦，匠心青年','time':'5月31日晚6:00','site':'学活剧场','img':'activity3.jpg','initiator':'小唐','phoneNumber': 100,'availablePerson':40},
    {'number':3,'title':'"告别文一大型晚会"','time':'6月5日晚上6:30','site':'杭电文一校区足球场','img':'activity1.png','initiator':'BiuBiu官方','phoneNumber': 10086,'availablePerson':64}
  ];
  public collectActivity = [
    {'number': 2, 'collectUserPhone': 10086},
    {'number': 3, 'collectUserPhone': 100},
    {'number': 1, 'collectUserPhone': 100}
  ];
  public publishActivity = [
    {'number': 1, 'publishUserPhone' : 10086},
    {'number': 2, 'publishUserPhone' : 100},
    {'number': 3, 'publishUserPhone' : 10086},
  ];
  public attendActivity = [
    {'number': 1, 'attendUserPhone' : 10086},
    {'number': 1, 'attendUserPhone' : 100},
    {'number': 2, 'attendUserPhone' : 100},
    {'number': 3, 'attendUserPhone' : 100},
    {'number': 2, 'attendUserPhone' : 10086},
  ];

  constructor(private navCtrl: NavController,
              private modalCtrl: ModalController) {
    if(localStorage.getItem('phoneNumber') != null){
      this.showUser.username = localStorage.getItem('username');
      this.showUser.signature = localStorage.getItem('signature');
    }
  }

//打开用户中心
  openUserCenter(){
    if(localStorage.getItem('phoneNumber')==null){
      let loginModal = this.modalCtrl.create(LoginPage);
      loginModal.onDidDismiss(data => {
        this.showUser.username = data.username;
        this.showUser.signature = data.signature;
      });
      loginModal.present();
    }else{
      let  userCenterModal = this.modalCtrl.create(UserCenterPage);
      userCenterModal.onDidDismiss(data => {
        this.showUser.username = data.username;
        this.showUser.signature = data.signature;
      });
      userCenterModal.present();
    }
  }

  open(word){
    if(localStorage.getItem('phoneNumber')==null){
      let loginModal = this.modalCtrl.create(LoginPage);
      loginModal.present();
    }else{
      this.user.username = localStorage.getItem('username');
      this.user.phoneNumber = localStorage.getItem('phoneNumber');
      switch (word) {
        case "myPublish":
          var datas = new Array();
          for(var data in this.publishActivity){
            if(this.publishActivity[data].publishUserPhone == this.user.phoneNumber){
              for(var data2 in this.activitys){
                if(this.activitys[data2].phoneNumber == this.user.phoneNumber){
                  datas.push(this.activitys[data2]);
                }
              }
              break;
            }
          }
          let publishModal = this.modalCtrl.create(MyPublishPage,{datas:datas});
          publishModal.present();
          break;
        case "myAttend":
          var datas = new Array();
          for(var data in this.attendActivity){
            if(this.attendActivity[data].attendUserPhone == this.user.phoneNumber){
              for(var data2 in this.activitys){
                if(this.activitys[data2].number == this.attendActivity[data].number){
                  datas.push(this.activitys[data2]);
                }
              }
            }
          }
          let attendModal = this.modalCtrl.create(MyAttendPage,{datas:datas});
          attendModal.present();
          break;
        case "myCollect":
          var datas = [];
          for(var data in this.collectActivity){
            if(this.collectActivity[data].collectUserPhone == this.user.phoneNumber){
              for(var data2 in this.activitys){
                if(this.activitys[data2].number == this.collectActivity[data].number){
                  datas.push(this.activitys[data2]);
                }
              }
            }
          }
          let collectModal = this.modalCtrl.create(MyCollectPage,{datas:datas});
          collectModal.present();
          break;
        case "myWallet":
          let walletModal = this.modalCtrl.create(MyWalletPage);
          walletModal.present();
          break;
        case "setting":
          let settingModal = this.modalCtrl.create(SettingPage);
          settingModal.onDidDismiss(data => {
            this.showUser.username = data.username;
            this.showUser.signature = data.signature;
          });
          settingModal.present();
          break;
       }
    }

  }
}
