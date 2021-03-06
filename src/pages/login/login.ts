import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, ToastController, NavController } from 'ionic-angular';
import { MainPage } from '../pages';
import { UserAPIService, APIConstants } from "../../providers/api";
import { LoginData } from "../../models";
import { AppConstants, LoadingControllerProvider } from "../../providers";

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
        private toastCtrl: ToastController,
        private translateService: TranslateService,
        private loginApi: UserAPIService,
        private loadingCtrl: LoadingControllerProvider) {
        this.account = {
            clientId: APIConstants.CLIENT_ID,
            clientSecret: APIConstants.CLIENT_SECRET,
            password: "123456",
            username: "ios@test.com"
        };
        this.translateService.get('LOGIN_ERROR').subscribe((value) => {
            this.loginErrorString = value;
        });
    }

    // Attempt to login in through our User service
    doLogin() {
        this.loadingCtrl.showLoading();
        this.loginApi.apiLogin(this.account).subscribe(res => {
            if (res.success && res.returnObject !== null) {

                var storage = window.localStorage;
                storage.setItem(AppConstants.API_ACCESS_TOKEN, res.returnObject.access_token);
                storage.setItem(AppConstants.USER_ID, res.returnObject.id);

                console.log(" after login: ", res.returnObject);
                this.loadingCtrl.hideLoading();
                this.navCtrl.setRoot(MainPage);
            }
        }, err => {
            this.loadingCtrl.hideLoading();
            let toast = this.toastCtrl.create({
                message: this.loginErrorString,
                duration: 6000
            });
            console.log(err);
            toast.present();
        });
    }

}
