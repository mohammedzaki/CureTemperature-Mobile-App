import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, ModalController, Events, NavParams } from 'ionic-angular';
import { HomePage, DevicesPage, DeviceHistoryPage, AboutPage, LoginPage, NotificationModal, SettingsPage } from "../pages";
import { AppConstants } from "../../providers";

export interface PageInterface {
    title: string;
    pageName?: string;
}

@IonicPage()
@Component({
    selector: 'page-menu',
    templateUrl: 'menu.html'
})
export class MenuPage {
    // A reference to the ion-nav in our component
    @ViewChild(Nav) nav: Nav;

    rootPage: any = 'HomePage';

    pages: PageInterface[];

    constructor(
        private modalCtrl: ModalController,
        private events: Events,
        private navParams: NavParams) {
        this.pages = [
            { title: 'Home', pageName: HomePage },
            { title: 'Devices', pageName: DevicesPage },
            { title: 'Device History', pageName: DeviceHistoryPage },
            //{ title: 'NOTIFICATIONS', pageName: NotificationModal },
            { title: 'About Us', pageName: AboutPage },
            { title: 'Settings', pageName: SettingsPage },
            { title: 'Logout', pageName: LoginPage }
        ];
        console.log('pageName: ' + this.navParams.get('pageName'));
        if (this.navParams.get('pageName') !== null && this.navParams.get('pageName') !== undefined) {
            this.rootPage = this.getPage({
                pageName: navParams.get('pageName')
            }).pageName;
        }
    }

    openPage(page: PageInterface) {
        let params = {};

        switch (page.pageName) {
            case NotificationModal:
                let modal = this.modalCtrl.create(NotificationModal);
                modal.present();
                break;
            case LoginPage:
                window.localStorage.setItem(AppConstants.USER_ID, '-1');
                this.events.publish(AppConstants.EVENTS.USER_LOGOUT, page.pageName);
                break;
            default:
                this.nav.setRoot(page.pageName, params);
                break;
        }
    }

    isActive(page: PageInterface) {
        return 'mainBlueColor';
    }

    getPage(params?: any): PageInterface {
        if (!params) {
            return null;
        }

        return this.pages.filter((page) => {
            for (let key in params) {
                let field = page[ key ];
                if (typeof field == 'string' && field.toLowerCase().indexOf(params[ key ].toLowerCase()) >= 0) {
                    return page;
                } else if (field == params[ key ]) {
                    return page;
                }
            }
            return null;
        })[ 0 ];
    }
}
