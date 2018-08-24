import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, ModalController, Events, NavParams } from 'ionic-angular';
import { HomePage, DevicesPage, DeviceHistoryPage, AboutPage, LoginPage, NotificationModal, SettingsPage } from "../pages";
import { AppConstants } from "../../providers";
import { TranslateService } from '@ngx-translate/core';

export interface PageInterface {
    title: string;
    pageName?: string;
    component?: any;
    index?: number;
    icon?: string;
}

@IonicPage()
@Component({
    selector: 'page-menu',
    templateUrl: 'menu.html'
})
export class MenuPage {
    // A reference to the ion-nav in our component
    @ViewChild(Nav) nav: Nav;

    rootPage: any = HomePage;

    pages: PageInterface[];

    constructor(
        private modalCtrl: ModalController,
        private translate: TranslateService,
        private events: Events,
        private navParams: NavParams) {
        this.pages = [
            { title: 'HOME', pageName: 'HomePage', component: HomePage, index: 0, icon: 'ios-home' },
            { title: 'DEVICES', pageName: 'DevicesPage', component: DevicesPage, index: 1, icon: 'ios-cart' },
            { title: 'DEVICE HISTORY', pageName: 'DeviceHistoryPage', component: DeviceHistoryPage, index: 2, icon: 'contacts' },
            //{ title: 'NOTIFICATIONS', pageName: 'NotificationModal', component: NotificationModal, index: 4, icon: 'information-circle' },
            { title: 'ABOUT US', pageName: 'AboutPage', component: AboutPage, index: 3, icon: 'information-circle' },
            { title: 'SETTINGS', pageName: 'SettingsPage', component: SettingsPage, index: 7, icon: 'information-circle' },
            { title: 'LOGOUT', pageName: 'LoginPage', component: LoginPage, index: 5, icon: 'information-circle' }
        ];
        console.log('pageIndex: ' + this.navParams.get('pageIndex'));
        if (this.navParams.get('pageIndex') !== null && this.navParams.get('pageIndex') !== undefined) {
            this.rootPage = this.getPage({
                index: navParams.get('pageIndex')
            }).component;
        }
    }

    openPage(page: PageInterface) {
        let params = {};

        if (page.index) {
            params = { tabIndex: page.index };
        }
        switch (page.index) {
            case 4:
                let modal = this.modalCtrl.create(NotificationModal);
                modal.present();
                break;
            case 5:
                window.localStorage.setItem(AppConstants.USER_ID, '-1');
                this.events.publish('user:logout', page.component);
                break;
            default:
                this.nav.setRoot(page.component, params);
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
