import { Injectable } from '@angular/core';
import { Platform, ToastController } from "ionic-angular";
import { Firebase } from "@ionic-native/firebase";
import { UserAPIService } from "../api";
import { AppConstants } from "../index";
import { MediaObject, Media } from '@ionic-native/media';

@Injectable()
export class AppNotification {

    public userId: number;

    constructor(
        private platform: Platform,
        private toastCtrl: ToastController,
        private firebaseNative: Firebase,
        private userProfileApi: UserAPIService,
        private media: Media) {
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
            await this.firebaseNative.grantPermission();
        }
        return this.saveDeviceTokenToDatabase(deviceToken);
    }

    // Listen to incoming FCM messages
    private listenToNotifications() {
        this.firebaseNative.onNotificationOpen().subscribe(data => {
            if (data.tap) {
                //Notification was received on device tray and tapped by the user.
                //alert('in background: ' + JSON.stringify(data));
                //console.log('in background: ' + JSON.stringify(data));
                alert(data.tempServerMessage);
            } else if (!data.tap) {
                //Notification was received in foreground. Maybe the user needs to be notified.
                //alert('in foreground: ' + JSON.stringify(data));
                let notificatioSoundURL = this.platform.is('android') ? `/android_asset/www/assets/audio/curealarm.mp3` : `cdvfile://localhost/bundle/www/assets/audio/curealarm.wav`;
                const file: MediaObject = this.media.create(notificatioSoundURL);
                file.play();
                alert(data.tempServerMessage);
            }
        });
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

    public setAppNotification() {
        try {
            this.firebaseGetToken();
            this.listenToNotifications();
        } catch (e) {
            console.log('error in setAppNotification: ' + JSON.stringify(e));
        }
    }
}
