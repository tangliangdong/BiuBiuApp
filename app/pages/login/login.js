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
var resetPassword_1 = require('../login/resetPassword');
var register_1 = require('../login/register');
var LoginPage = (function () {
    function LoginPage(navCtrl, platform, modalCtrl, viewCtrl, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.user = {
            phoneNumber: '',
            password: ''
        };
        platform.ready().then(function (readySource) {
        });
    }
    //定位图标跳动进入效果
    LoginPage.prototype.onPageWillEnter = function () {
        this.userPassword = document.getElementById('userPassword').getElementsByTagName('input');
        this.loginImg = document.getElementById('loginImg');
        this.loginImg.className += ' animated bounceIn';
        //this.loginImg.setAttribute('class','animated bounceIn login-img');
    };
    //登录账号
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        if (this.user.phoneNumber == '110' && this.user.password == '110') {
            var loadingLogin_1 = this.loadingCtrl.create({
                content: '正在登陆',
                spinner: 'ios',
                duration: 2000
            });
            localStorage.setItem('phoneNumber', this.user.phoneNumber);
            loadingLogin_1.present();
            setTimeout(function () {
                loadingLogin_1.dismiss();
            }, 2000);
            setTimeout(function () {
                _this.viewCtrl.dismiss(_this.user);
            }, 3000);
        }
        else if (this.user.phoneNumber == '' || this.user.password == '') {
            var toastError = this.toastCtrl.create({
                message: '手机号或密码不能为空',
                duration: 3000,
                position: 'top'
            });
            toastError.present();
        }
        else {
            var toastError = this.toastCtrl.create({
                message: '手机号或密码错误',
                duration: 3000,
                position: 'top'
            });
            toastError.onDidDismiss(function () {
                _this.userPassword[0].value = '';
            });
            toastError.present();
        }
    };
    //跳转注册页面
    LoginPage.prototype.doRegister = function () {
        var register = this.modalCtrl.create(register_1.RegisterPage);
        register.present();
    };
    //忘记密码，跳转到找回密码页面
    LoginPage.prototype.findPassword = function () {
        var findPasswordModal = this.modalCtrl.create(resetPassword_1.ResetPasswordPage);
        findPasswordModal.present();
    };
    LoginPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/login/login.html'
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, ionic_angular_1.Platform, ionic_angular_1.ModalController, ionic_angular_1.ViewController, ionic_angular_1.LoadingController, ionic_angular_1.ToastController])
    ], LoginPage);
    return LoginPage;
}());
exports.LoginPage = LoginPage;
