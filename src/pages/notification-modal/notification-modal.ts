import {Component} from "@angular/core";
import {ViewController, ToastController, LoadingController} from "ionic-angular";
import { UserAPIService } from "../../providers/api";
import { AppConstants } from "../../providers";
import { Device } from "../../models/device";

@Component({
    selector: 'notification-modal',
    templateUrl: 'notification-modal.html'
})
export class NotificationModal {

    devices: Device[] = [];
    
    constructor(
        public viewCtrl: ViewController,
        private notificationService: UserAPIService,
        public toastCtrl: ToastController,
        public loadingCtrl: LoadingController

    ) {

    }

    getNotifications() {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var storage = window.localStorage;
        let userId = storage.getItem(AppConstants.USER_ID);
        this.notificationService.getUserNotifications(userId).subscribe(res => {
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

    dismiss() {
        this.viewCtrl.dismiss();
    }


}