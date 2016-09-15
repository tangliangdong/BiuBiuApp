import {Component} from '@angular/core';
import {NavController,ViewController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/about/userCenter.html'
})
export class UserCenterPage {
  public user = {
    username : '',
    phoneNumber : ''
  }

  constructor(private navCtrl: NavController,
              private viewCtrl: ViewController) {
    if(localStorage.getItem('username') != null){
      this.user.username = localStorage.getItem('username');
      this.user.phoneNumber = localStorage.getItem('phoneNumber');
    }
  }

  backToHome(){
    this.viewCtrl.dismiss();
  }
}
