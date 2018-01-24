import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, ToastController, Nav, NavController } from 'ionic-angular';

import { MainPage, HomePage } from '../pages';

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    
    // The account fields for the login form.
    // If you're using the username field with or without email, make
    // sure to add it to the type
    account: { email: string, password: string } = {
        email: '',
        password: ''
    };

    // Our translated text strings
    private loginErrorString: string;

    constructor(
        public navCtrl: NavController,
        public toastCtrl: ToastController,
        public translateService: TranslateService) {

        this.translateService.get('LOGIN_ERROR').subscribe((value) => {
            this.loginErrorString = value;
        });
    }

    // Attempt to login in through our User service
    doLogin() {
        this.navCtrl.setRoot(MainPage);
    }
}
