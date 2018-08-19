import { Injectable } from '@angular/core';
import { Platform, ToastController, AlertController } from "ionic-angular";
import { Firebase } from "@ionic-native/firebase";
import { UserAPIService } from "../api";
import { AppConstants } from "../index";
import { tap } from 'rxjs/operators';

@Injectable()
export class AppNotification {

    public userId: number;

    constructor(
        private platform: Platform,
        private toastCtrl: ToastController,
        private firebaseNative: Firebase,
        private userProfileApi: UserAPIService,
        private alertCtrl: AlertController) {
        this.userId = +window.localStorage.getItem(AppConstants.USER_ID);
        this.userProfileApi.configuration.accessToken = window.localStorage.getItem(AppConstants.API_ACCESS_TOKEN);
        console.log('accessToken from UserAPIService: ' + this.userProfileApi.configuration.accessToken);
    }

    // Get permission from the user
    async firebaseGetToken() {
        let deviceToken;

        if (this.platform.is('android')) {
            deviceToken = await this.firebaseNative.getToken();
        }

        if (this.platform.is('ios')) {
            deviceToken = await this.firebaseNative.getToken();
            await this.firebaseNative.grantPermission().then(granted => {
                if (!granted) {
                    this.alertCtrl.create({
                        title: "Permission",
                        message: "You wouldn't be able to receive any notifications."
                    });
                }
            }).catch(error => {
                this.toastCtrl.create({ message: error });
            });
        }
        return this.saveDeviceTokenToDatabase(deviceToken);
    }

    // Listen to incoming FCM messages
    private listenToNotifications() {
        this.firebaseNative.onNotificationOpen().pipe(
            tap(this.onNotificationOpen)
        ).subscribe();
    }

    private saveDeviceTokenToDatabase(deviceToken: string) {
        console.log("Cure Temprature device Token: " + deviceToken);
        console.log("Cure Temprature USER_ID: " + this.userId);
        if (this.platform.is('android')) {
            this.callSaveDeviceToken(deviceToken, 'android', this.userId);
        } else if (this.platform.is('ios')) {
            this.callSaveDeviceToken(deviceToken, 'ios', this.userId);
        }
    }

    private callSaveDeviceToken(deviceToken: string, platform: string, uesrId: number) {
        this.userProfileApi.saveUserDeviceToken(deviceToken, platform, uesrId).subscribe(res => {
            if (res.success && res.returnObject !== null) {

            }
            console.log(res.message);
        }, err => {
            console.log(err.message);
            let toast = this.toastCtrl.create({
                message: err.message,
                duration: 3000
            });
            toast.present();
        });
    }

    private onNotificationOpen(data) {
        if (data.tap) {
            //Notification was received on device tray and tapped by the user.
            alert('in background: ' + JSON.stringify(data));
            console.log('in background: ' + JSON.stringify(data));
        } else if (!data.tap) {
            //Notification was received in foreground. Maybe the user needs to be notified.
            alert('in foreground: ' + JSON.stringify(data));
            console.log('in foreground: ' + JSON.stringify(data));
        }
    }

    public setAppNotification() {
        this.firebaseGetToken();
        this.listenToNotifications();
    }
}
