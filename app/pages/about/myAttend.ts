import {Component} from '@angular/core';
import {NavController,ViewController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/about/myAttend.html'
})
export class MyAttendPage {
  constructor(private navCtrl: NavController,
              private viewCtrl: ViewController) {
  }

  backToHome(){
    this.viewCtrl.dismiss();
  }
}
