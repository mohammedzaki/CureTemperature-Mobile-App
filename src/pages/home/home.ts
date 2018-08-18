import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, LoadingController, ToastController } from 'ionic-angular';
import { NotificationModal, DevicesPage } from "../pages";
import { AppNotification, AppConstants } from "../../providers/index";
import { Device, Account } from "../../models";
import { UserDevicesService } from "../../providers/api";

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
    userPerferedDevices;
    
    constructor(
        public navCtrl: NavController,
        private modalCtrl: ModalController,
        private appNotification: AppNotification,
        private userDevicesService: UserDevicesService,
        public toastCtrl: ToastController,
        public loadingCtrl: LoadingController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad HomePage');
        this.appNotification.setAppNotification();
        this.setDevices();
    }

    getPerD() {
        var storage = window.localStorage;
        this.userPerferedDevices = JSON.parse(storage.getItem(AppConstants.USER_PREFERED_DEVICES));
        return [ this.userPerferedDevices.uL, this.userPerferedDevices.uR, this.userPerferedDevices.dL, this.userPerferedDevices.dR ];
    }

    setDevices() {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
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
                loading.dismiss();
            }
        }, err => {
            loading.dismiss();
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
