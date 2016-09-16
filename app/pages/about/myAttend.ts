import {Component} from '@angular/core';
import {NavController,ViewController,NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/about/myAttend.html'
})
export class MyAttendPage {
  public datas : any;
  constructor(private navCtrl: NavController,
              private viewCtrl: ViewController,
              private params: NavParams) {

    this.datas = params.get('datas');
  }

  backToHome(){
    this.viewCtrl.dismiss();
  }
}
