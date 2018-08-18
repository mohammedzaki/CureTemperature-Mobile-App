import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { LoginPage } from "../login/login";

@IonicPage()
@Component({
    selector: 'page-loading',
    templateUrl: 'loading.html'
})
export class LoadingPage {
    
    constructor(public navCtrl: NavController) {

    }

    ionViewDidLoad() {
        setTimeout(() => {
            this.showLogin();
        }, 3000);
    }

    showLogin() {
        this.navCtrl.setRoot(LoginPage);
    }
}