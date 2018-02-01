import { Injectable } from '@angular/core';
import { Platform, ToastController, AlertController } from "ionic-angular";
import { Firebase } from "@ionic-native/firebase";
import { UserAPIService } from "../api";
import { AppConstants } from "../index";

@Injectable()
export class AppNotification {

    constructor(
        private platform: Platform,
        private toastCtrl: ToastController,
        private firebase: Firebase,
        private userProfileApi: UserAPIService,
        private alertCtrl: AlertController) {

    }

    private grantNotificationPermission() {
        if (this.platform.is("ios")) {
            this.firebase.grantPermission().then(granted => {
                if (granted) {
                    this.firebaseGetToken();
                } else {
                    this.alertCtrl.create({
                        title: "Permission",
                        message: "You wouldn't be able to receive any notifications."
                    });
                }
            }).catch(error => {
                this.toastCtrl.create({ message: error });
            });
        } else {
            this.firebaseGetToken();
        }
    }

    private firebaseGetToken() {
        this.firebase.getToken()
            .then(deviceToken => {
                this.setDeviceToken(deviceToken);
            }).catch(error => {
                console.log('Cure Temprature error: ' + error);
            });
    }

    private firebaseOnTokenRefresh() {
        this.firebase.onTokenRefresh()
            .subscribe((deviceToken: string) => {
                this.setDeviceToken(deviceToken);
            });
    }

    private setDeviceToken(deviceToken: string) {
        console.log("Cure Temprature device Token: " + deviceToken);
        var uesrId = +window.localStorage.getItem(AppConstants.USER_ID);
        console.log("Cure Temprature USER_ID: " + uesrId);
        if (this.platform.is('android')) {
            this.callSaveDeviceToken(deviceToken, 'android', uesrId);
        } else if (this.platform.is('ios')) {
            this.callSaveDeviceToken(deviceToken, 'ios', uesrId);
        }
    }

    private callSaveDeviceToken(deviceToken, platform, uesrId) {
        this.userProfileApi.saveUserDeviceToken(deviceToken, platform, uesrId).subscribe(res => {
            if (res.success && res.returnObject !== null) {

            }
            console.log(res.message);
        }, err => {
            console.log(err);
            let toast = this.toastCtrl.create({
                message: err,
                duration: 3000
            });
            toast.present();
        });
    }

    private onNotificationOpen(data) {
        alert('get notify');
        if (data.tap) {
            //Notification was received on device tray and tapped by the user.
            alert('from outside: ' + JSON.stringify(data));
            //let toast = this.toastCtrl.create({
            //  message: data,
            //  duration: 3000
            //});
            //toast.present();
            //console.log(JSON.stringify(data));
        } else if (!data.tap) {
            //Notification was received in foreground. Maybe the user needs to be notified.
            console.log('from foreground: ' + JSON.stringify(data));
            //  this.alertCtrl.create({
            //    message: data
            //  });
        }
    }

    public setAppNotification() {
        try {
            //platform.resume.subscribe(() => {
            // this.firebase.onNotificationOpen()
            //});
            this.firebase.onNotificationOpen().subscribe(this.onNotificationOpen);
            this.grantNotificationPermission();
            this.firebaseOnTokenRefresh();
        } catch (error) {
            console.log('Cure Temprature error: ' + error);
        }
    }
}
