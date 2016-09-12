import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {DynamicPage} from '../contact/dynamic';

@Component({
  templateUrl: 'build/pages/contact/contact.html'
})
export class ContactPage {
  private chatRoot: any;
  constructor(private navCtrl: NavController) {
    this.chatRoot = DynamicPage;
  }
}
