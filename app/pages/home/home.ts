import {Component,ViewChild} from '@angular/core';
import {NavController,Slides} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  @ViewChild('mySlider') slider: Slides;

  public activitys = [{'title':'文一美食节','time':'5月29日6:30','site':'地点：科大食苑三楼','img':'activity2.png'},
                      {'title':'以行筑梦，匠心青年','time':'5月31日晚6:00','site':'学活剧场','img':'activity3.jpg'},
                      {'title':'"告别文一大型晚会"','time':'6月5日晚上6:30','site':'杭电文一校区足球场','img':'activity1.png'}]

  constructor(private navCtrl: NavController) {

  }

  mySlideOptions = {
    initialSlide: 0,
    loop: true,
    speed: 2500,
    autoplay: 1000
  };
}
