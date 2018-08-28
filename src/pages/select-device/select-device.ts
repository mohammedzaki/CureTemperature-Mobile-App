import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { UserDevicesService } from "../../providers/api";
import { AppConstants, LoadingControllerProvider } from "../../providers";
import { Device, Account } from "../../models";

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
    account: Account = {
        name: '...',
        place: '...'
    };
    
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private viewController: ViewController,
        private userDevicesService: UserDevicesService,
        public toastCtrl: ToastController,
        public loadingCtrl: LoadingControllerProvider) {
    }

    ionViewDidLoad() {
        console.log('SelectDeviceComponent DevicesPage');
        this.setDevices();
    }

    dismiss(device: Device) {
        device.account = this.account;
        this.viewController.dismiss(device);
    }

    setDevices() {
        this.loadingCtrl.showLoading();
        var storage = window.localStorage;
        let userId = storage.getItem(AppConstants.USER_ID);
        this.userDevicesService.getUserDevices(userId).subscribe(res => {
            if (res.success) {
                this.devices = res.data.devices;
                this.account = res.data.account;
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
