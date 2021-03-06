import {Component} from '@angular/core';
import {HomePage} from '../home/home';
import {AboutPage} from '../about/about';
import {ContactPage} from '../contact/contact';
import {ActivityPage} from '../activity/activity';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private windowHeight: string;
  private tabs : any;

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;
  private tab4Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = HomePage;
    this.tab2Root = ActivityPage;
    this.tab3Root = ContactPage;
    this.tab4Root = AboutPage;
    this.tabs = document.getElementById('tabs');
    this.windowHeight = document.documentElement.clientHeight + '';
    // this.tabs.setAttribute('top', this.windowHeight);
    // this.tabs.setAttribute('transform:','translate(0,-100%)');
  }
}
