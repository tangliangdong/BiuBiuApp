import {Component,ViewChild} from '@angular/core';
import {NavController,Slides,ModalController} from 'ionic-angular';

import {LocationPage} from '../home/location';
import {LimitActivityPage} from '../home/limitActivity';
import {UserActivityPage} from '../home/userActivity';

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
    {'number':'1','title':'文一美食节','time':'5月29日6:30','site':'文一校区科大食苑三楼','img':'activity2.png','initiator':'BiuBiu官方','availablePerson':100},
    {'number':'2','title':'以行筑梦，匠心青年','time':'5月31日晚6:00','site':'学活剧场','img':'activity3.jpg','initiator':'BiuBiu官方','availablePerson':40},
    {'number':'3','title':'"告别文一大型晚会"','time':'6月5日晚上6:30','site':'杭电文一校区足球场','img':'activity1.png','initiator':'BiuBiu官方','availablePerson':64}
  ];
  public collectActivity = [
    {'number': '2', 'collectUser': 'BiuBiu官方'},
    {'number': '3', 'collectUser': '小唐'},
    {'number': '1', 'collectUser': '小唐'}
  ];
  public publishActivity = [
    {'number': '1', 'publishUser' : 'BiuBiu官方'},
    {'number': '2', 'publishUser' : '小唐'}
  ];

  constructor(private navCtrl: NavController,
              private modalCtrl: ModalController) {

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
    console.log(activity);
    let UserActivityModal = this.modalCtrl.create(UserActivityPage,{
      activity: activity
    });
    UserActivityModal.present();
  }
}
