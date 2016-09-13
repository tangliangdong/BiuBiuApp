"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var login_1 = require('../login/login');
var ActivityPage = (function () {
    function ActivityPage(navCtrl, platform, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.isRotate = false;
        this.user = {
            phoneNumber: '用户中心',
            register: '注册',
            doWhat: '1'
        };
        if (localStorage.getItem('phoneNumber') == null) {
            var loginNav = this.navCtrl.push(login_1.LoginPage);
        }
        else {
        }
        platform.ready().then(function (readySource) {
            // Platform now ready, execute any required native code
            //this.slider.slideNext(300);
            //this.slider.slideNext(300,true);
            //console.log(this.slider.ionDidChange);
            //this.slider._proto_.slideTo(2, 500,false);
            _this.addthree = document.getElementById('addthree');
            _this.firstbtn = document.getElementById('firstbtn');
            _this.secondbtn = document.getElementById('secondbtn');
            _this.thirdbtn = document.getElementById('thirdbtn');
            if (localStorage.getItem('phoneNumber') != null) {
                _this.user.phoneNumber = localStorage.getItem('phoneNumber');
                _this.user.register = '';
            }
        });
    }
    ActivityPage.prototype.openThree = function () {
        //console.log(this.firstbtn);
        if (!this.isRotate) {
            this.isRotate = true;
            this.addthree.removeAttribute('addbtn-no-rotate');
            this.addthree.setAttribute('class', "addbtn-rotate");
            this.firstbtn.removeAttribute('nofirstbtn');
            this.secondbtn.removeAttribute('nosecondbtn');
            this.thirdbtn.removeAttribute('nothirdbtn');
            this.firstbtn.setAttribute('class', 'firstbtn');
            this.secondbtn.setAttribute('class', 'secondbtn');
            this.thirdbtn.setAttribute('class', 'thirdbtn');
        }
        else {
            this.isRotate = false;
            this.addthree.removeAttribute('addbtn-rotate');
            this.addthree.setAttribute('class', "addbtn-no-rotate");
            this.firstbtn.removeAttribute('firstbtn');
            this.secondbtn.removeAttribute('secondbtn');
            this.thirdbtn.removeAttribute('thirdbtn');
            this.firstbtn.setAttribute('class', 'nofirstbtn');
            this.secondbtn.setAttribute('class', 'nosecondbtn');
            this.thirdbtn.setAttribute('class', 'nothirdbtn');
        }
    };
    ActivityPage.prototype.login = function () {
        var _this = this;
        var loginModal = this.modalCtrl.create(login_1.LoginPage);
        loginModal.onDidDismiss(function (data) {
            console.log(data);
            _this.user.phoneNumber = data.phoneNumber;
            _this.user.register = '';
        });
        loginModal.present();
    };
    ActivityPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/activity/activity.html'
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, ionic_angular_1.Platform, ionic_angular_1.ModalController])
    ], ActivityPage);
    return ActivityPage;
}());
exports.ActivityPage = ActivityPage;
