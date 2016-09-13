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
var location_1 = require('../home/location');
var limitActivity_1 = require('../home/limitActivity');
var userActivity_1 = require('../home/userActivity');
var HomePage = (function () {
    function HomePage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.activitys = [
            { 'title': '文一美食节', 'time': '5月29日6:30', 'site': '文一校区科大食苑三楼', 'img': 'activity2.png', 'initiator': 'BiuBiu官方', 'availablePerson': '100' },
            { 'title': '以行筑梦，匠心青年', 'time': '5月31日晚6:00', 'site': '学活剧场', 'img': 'activity3.jpg', 'initiator': 'BiuBiu官方', 'availablePerson': '40' },
            { 'title': '"告别文一大型晚会"', 'time': '6月5日晚上6:30', 'site': '杭电文一校区足球场', 'img': 'activity1.png', 'initiator': 'BiuBiu官方', 'availablePerson': '64' }
        ];
        this.mySlideOptions = {
            initialSlide: 0,
            loop: true,
            speed: 2500,
            autoplay: 1000
        };
    }
    HomePage.prototype.location = function () {
        var locationModal = this.modalCtrl.create(location_1.LocationPage);
        locationModal.present();
    };
    HomePage.prototype.limitActivity = function () {
        var limitModal = this.modalCtrl.create(limitActivity_1.LimitActivityPage);
        limitModal.present();
    };
    HomePage.prototype.itemSelected = function (activity) {
        console.log(activity);
        var UserActivityModal = this.modalCtrl.create(userActivity_1.UserActivityPage, {
            activity: activity
        });
        UserActivityModal.present();
    };
    __decorate([
        core_1.ViewChild('mySlider'), 
        __metadata('design:type', ionic_angular_1.Slides)
    ], HomePage.prototype, "slider", void 0);
    HomePage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/home/home.html'
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, ionic_angular_1.ModalController])
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
