import { Component } from '@angular/core';
import { NavController, IonicPage, ToastController } from 'ionic-angular';
import { Device } from "../../models";
import { UserDevicesService } from "../../providers/api/services/userDevices.service";
import { AppConstants, LoadingControllerProvider } from "../../providers";

@IonicPage()
@Component({
    selector: 'page-devices',
    templateUrl: 'devices.html'
})
export class DevicesPage {

    devices: Device[] = [];

    constructor(public navCtrl: NavController,
        private userDevicesService: UserDevicesService,
        public toastCtrl: ToastController,
        public loadingCtrl: LoadingControllerProvider) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad DevicesPage');
        this.setDevices();
    }

    setDevices() {
        this.loadingCtrl.showLoading();
        var storage = window.localStorage;
        let userId = storage.getItem(AppConstants.USER_ID);
        this.userDevicesService.getUserDevices(userId).subscribe(res => {
            if (res.success) {
                this.devices = res.data.devices;
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
}
