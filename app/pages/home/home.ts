import {Component,ViewChild} from '@angular/core';
import {NavController,Slides,ModalController,AlertController} from 'ionic-angular';

import {LocationPage} from '../home/location';
import {LimitActivityPage} from '../home/limitActivity';
import {UserActivityPage} from '../home/userActivity';

import {LoginPage} from '../login/login';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  @ViewChild('mySlider') slider: Slides;

  public user = {
    phone: '',
    username: '未登录',
  };
  public activitys = [
    {'number':1,'title':'文一美食节','time':'5月29日6:30','site':'文一校区科大食苑三楼','img':'activity2.png','initiator':'BiuBiu官方','phoneNumber': 10086,'availablePerson':100},
    {'number':2,'title':'以行筑梦，匠心青年','time':'5月31日晚6:00','site':'学活剧场','img':'activity3.jpg','initiator':'小唐','phoneNumber': 100,'availablePerson':40},
    {'number':3,'title':'"告别文一大型晚会"','time':'6月5日晚上6:30','site':'杭电文一校区足球场','img':'activity1.png','initiator':'BiuBiu官方','phoneNumber': 10086,'availablePerson':64}
  ];
  // public collectActivity = [
  //   {'number': 2, 'collectUser': 'BiuBiu官方'},
  //   {'number': 3, 'collectUser': '小唐'},
  //   {'number': 1, 'collectUser': '小唐'}
  // ];
  public publishActivity = [
    {'number': 1, 'publishUserPhone' : 10086},
    {'number': 2, 'publishUserPhone' : 100},
    {'number': 3, 'publishUserPhone' : 10086},
  ];
  /*public attendActivity = [
    {'number': 1, 'attendUserPhone' : 10086},
    {'number': 1, 'attendUserPhone' : 100},
    {'number': 2, 'attendUserPhone' : 100},
    {'number': 3, 'attendUserPhone' : 100},
    {'number': 2, 'attendUserPhone' : 10086},
  ];*/

  constructor(private navCtrl: NavController,
              private modalCtrl: ModalController,
              private alertCtrl: AlertController) {

  }

  mySlideOptions = {
    initialSlide: 0,
    loop: true,
    speed: 2500,
    autoplay: 1000
  };

  location(){
    let locationModal = this.modalCtrl.create(LocationPage);
    locationModal.present();
  }
  limitActivity(){
    let limitModal = this.modalCtrl.create(LimitActivityPage);
    limitModal.present();
  }
  itemSelected(activity){
    if(localStorage.getItem('phoneNumber') == null){
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
            console.log('123');
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
