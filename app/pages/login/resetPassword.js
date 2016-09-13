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
var ResetPasswordPage = (function () {
    function ResetPasswordPage(navCtrl, modalCtrl, viewCtrl, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.user = {
            phoneNumber: '',
            register: '',
            depositStartTime: '',
            depositFinishTime: '',
            depositBaggageAmount: '',
        };
    }
    ResetPasswordPage.prototype.backToHome = function () {
        this.viewCtrl.dismiss();
    };
    ResetPasswordPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/login/resetPassword.html'
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, ionic_angular_1.ModalController, ionic_angular_1.ViewController, ionic_angular_1.AlertController, ionic_angular_1.ToastController])
    ], ResetPasswordPage);
    return ResetPasswordPage;
}());
exports.ResetPasswordPage = ResetPasswordPage;