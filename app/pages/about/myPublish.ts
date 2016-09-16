import {Component} from '@angular/core';
import {NavController,ViewController,NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/about/myPublish.html'
})
export class MyPublishPage {
  public datas: any;
  constructor(private navCtrl: NavController,
              private viewCtrl: ViewController,
              params: NavParams) {
    this.datas = params.get('datas');
  }

  backToHome(){
    this.viewCtrl.dismiss();
  }
}
