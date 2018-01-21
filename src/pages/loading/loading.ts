import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, Nav } from 'ionic-angular';
import { LoginPage } from "../login/login";

@IonicPage()
@Component({
    selector: 'page-loading',
    templateUrl: 'loading.html'
})
export class LoadingPage {
    // A reference to the ion-nav in our component
    @ViewChild(Nav) nav: Nav;
    
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