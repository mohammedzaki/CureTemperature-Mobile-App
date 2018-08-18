import { Component } from '@angular/core';
import { NavController, IonicPage, ToastController, LoadingController } from 'ionic-angular';
import { Device } from "../../models";
import { UserDevicesService } from "../../providers/api/services/userDevices.service";
import { AppConstants } from "../../providers/index";

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
        public loadingCtrl: LoadingController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad DevicesPage');
        this.setDevices();
    }

    setDevices() {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var storage = window.localStorage;
        let userId = storage.getItem(AppConstants.USER_ID);
        this.userDevicesService.getUserDevices(userId).subscribe(res => {
            if (res.success) {
                this.devices = res.data.devices;
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
}
