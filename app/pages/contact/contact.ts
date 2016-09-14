import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {DynamicPage} from '../contact/dynamic';

@Component({
  templateUrl: 'build/pages/contact/contact.html'
})
export class ContactPage {
  public contact: string = "new";
  constructor(private navCtrl: NavController) {

  }
}
