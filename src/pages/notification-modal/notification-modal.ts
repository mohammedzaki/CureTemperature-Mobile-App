import { Component } from "@angular/core";
import { ViewController, ToastController } from "ionic-angular";
import { UserAPIService } from "../../providers/api";
import { AppConstants, LoadingControllerProvider } from "../../providers";
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
        public loadingCtrl: LoadingControllerProvider) {
    }

    getNotifications() {
        this.loadingCtrl.showLoading();
        var storage = window.localStorage;
        let userId = storage.getItem(AppConstants.USER_ID);
        this.notificationService.getUserNotifications(userId).subscribe(res => {
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

    dismiss() {
        this.viewCtrl.dismiss();
    }


}