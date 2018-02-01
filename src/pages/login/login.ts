import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, ToastController, NavController, LoadingController } from 'ionic-angular';

import { MainPage } from '../pages';
import { UserAPIService, APIConstants } from "../../providers/api";
import { LoginData } from "../../models";
import { AppConstants } from "../../providers";

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {

    public account: LoginData;
    // Our translated text strings
    private loginErrorString: string;

    constructor(
        public navCtrl: NavController,
        public toastCtrl: ToastController,
        public translateService: TranslateService,
        private LoginApi: UserAPIService,
        public loadingCtrl: LoadingController) {
        this.account = {
            grantType: APIConstants.GRANT_TYPE,
            clientId: APIConstants.CLIENT_ID,
            clientSecret: APIConstants.CLIENT_SECRET,
            password: "123456789",
            username: "test@test.com"
        };
        this.translateService.get('LOGIN_ERROR').subscribe((value) => {
            this.loginErrorString = value;
        });
    }

    // Attempt to login in through our User service
    doLogin() {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.LoginApi.apiLogin(this.account).subscribe(res => {
            if (res.success && res.returnObject !== null) {

                var storage = window.localStorage;
                storage.setItem(AppConstants.API_ACCESS_TOKEN, res.returnObject.access_token);
                storage.setItem(AppConstants.USER_ID, res.returnObject.id);
                
                console.log(" after login: ", res.returnObject);
                loading.dismiss();
                this.navCtrl.setRoot(MainPage);
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
