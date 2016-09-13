import {Component} from '@angular/core';
import {NavController,ViewController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/location.html'
})
export class LocationPage {
  constructor(private navCtrl: NavController,
              private viewCtrl: ViewController) {
  }

  backToHome(){
    this.viewCtrl.dismiss();
  }
}
