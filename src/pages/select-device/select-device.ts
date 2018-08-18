import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, LoadingController } from 'ionic-angular';
import { UserDevicesService } from "../../providers/api";
import { AppConstants } from "../../providers";
import { Device } from "../../models";

/**
 * Generated class for the SelectDevicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-select-device',
    templateUrl: 'select-device.html',
})
export class SelectDevicePage {

    devices: Device[] = [];
    device;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private viewController: ViewController,
        private userDevicesService: UserDevicesService,
        public toastCtrl: ToastController,
        public loadingCtrl: LoadingController) {
    }

    ionViewDidLoad() {
        console.log('SelectDeviceComponent DevicesPage');
        this.setDevices();
    }

    dismiss(device: Device) {
        this.viewController.dismiss(device);
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

    filterItems(ev: any) {
        let val = ev.target.value;

        if (val && val.trim() !== '') {
            this.devices = this.devices.filter(function (item) {
                return item.name.toLowerCase().includes(val.toLowerCase());
            });
        }
    }
    
    selectDevice(device) {
        this.dismiss(device);
    }
}
