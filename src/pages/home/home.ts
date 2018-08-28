import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, LoadingController, ToastController } from 'ionic-angular';
import { NotificationModal, DevicesPage } from "../pages";
import { AppNotification, AppConstants, Settings, LoadingControllerProvider } from "../../providers";
import { Device, Account } from "../../models";
import { UserDevicesService } from "../../providers/api";
import { UserPerferedDevicesI } from '../../providers/settings/settings.model';

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    deviceUL: Device = {};
    deviceUR: Device = {};
    deviceDL: Device = {};
    deviceDR: Device = {};
    account: Account = {
        name: 'Cure Group',
        place: 'Sheraton'
    };
    userPerferedDevices: UserPerferedDevicesI;

    constructor(
        private navCtrl: NavController,
        private modalCtrl: ModalController,
        private appNotification: AppNotification,
        private userDevicesService: UserDevicesService,
        private toastCtrl: ToastController,
        private loadingCtrl: LoadingControllerProvider,
        private settings: Settings) {

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad HomePage');
        this.appNotification.setAppNotification();
        this.settings.load().then(() => {
            this.userPerferedDevices = this.settings.allSettings.userPerferedDevices;
            this.setDevices();
        });
    }

    getPerD() {
        return [ this.userPerferedDevices.uL, this.userPerferedDevices.uR, this.userPerferedDevices.dL, this.userPerferedDevices.dR ];
    }

    setDevices() {
        this.loadingCtrl.showLoading();
        var storage = window.localStorage;
        let userId = storage.getItem(AppConstants.USER_ID);
        this.userDevicesService.getUserDevices(userId, this.getPerD()).subscribe(res => {
            if (res.success) {
                if (res.data.account !== null) {
                    this.account = res.data.account;
                }
                res.data.devices.forEach((device) => {
                    switch (device.id) {
                        case this.userPerferedDevices.uL:
                            this.deviceUL = device;
                            this.deviceUL.shouldShow = true;
                            break;
                        case this.userPerferedDevices.uR:
                            this.deviceUR = device;
                            this.deviceUR.shouldShow = true;
                            break;
                        case this.userPerferedDevices.dL:
                            this.deviceDL = device;
                            this.deviceDL.shouldShow = true;
                            break;
                        case this.userPerferedDevices.dR:
                            this.deviceDR = device;
                            this.deviceDR.shouldShow = true;
                            break;
                        default:
                            break;
                    }
                });
                this.loadingCtrl.hideLoading();
            }
        }, err => {
            this.loadingCtrl.hideLoading();
            let toast = this.toastCtrl.create({
                message: err,
                duration: 6000
            });
            console.log(err);
            toast.present();
        });
    }

    openNotification() {
        console.log('open Notifications');
        let modal = this.modalCtrl.create(NotificationModal);
        modal.present();
    }

    openSelectDevices() {
        this.navCtrl.push(DevicesPage);
    }
}
