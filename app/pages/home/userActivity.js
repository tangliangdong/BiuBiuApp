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
var transmit_1 = require('../transmit/transmit');
var UserActivityPage = (function () {
    function UserActivityPage(navCtrl, viewCtrl, params, alertCtrl, toastCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.activity = params.get('activity');
    }
    //返回主页面
    UserActivityPage.prototype.backToHome = function () {
        this.viewCtrl.dismiss();
    };
    //点击加入活动按钮
    UserActivityPage.prototype.attendActivity = function () {
        var _this = this;
        var alertAttend = this.alertCtrl.create({
            title: "确定加入这个活动吗？",
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: '确定',
                    handler: function () {
                        var toast = _this.toastCtrl.create({
                            message: '成功参加活动',
                            duration: 3000,
                            position: 'top'
                        });
                    }
                }
            ]
        });
        alertAttend.present();
    };
    //转发操作
    UserActivityPage.prototype.transmit = function () {
        var transmitModal = this.modalCtrl.create(transmit_1.TransmitPage);
        transmitModal.present();
    };
    UserActivityPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/home/userActivity.html'
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, ionic_angular_1.ViewController, ionic_angular_1.NavParams, ionic_angular_1.AlertController, ionic_angular_1.ToastController, ionic_angular_1.ModalController])
    ], UserActivityPage);
    return UserActivityPage;
}());
exports.UserActivityPage = UserActivityPage;
