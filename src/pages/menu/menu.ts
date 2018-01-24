import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, ModalController } from 'ionic-angular';
import { HomePage, DevicesPage, DeviceHistoryPage, AboutPage, LoginPage, NotificationModal } from "../pages";

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

    constructor(private modalCtrl:ModalController) {

        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'HOME', pageName: 'HomePage', component: HomePage, index: 0, icon: 'ios-home' },
            { title: 'DEVICES', pageName: 'DevicesPage', component: DevicesPage, index: 1, icon: 'ios-cart' },
            { title: 'HISTORY', pageName: 'DeviceHistoryPage', component: DeviceHistoryPage, index: 2, icon: 'contacts' },
            { title: 'ABOUT US', pageName: 'AboutPage', component: AboutPage, index: 3, icon: 'information-circle' },
            { title: 'NOTIFICATIONS', pageName: 'NotificationModal', component: NotificationModal, index: 4, icon: 'information-circle' },
            { title: 'LOGOUT', pageName: 'LoginPage', component: LoginPage, index: 5, icon: 'information-circle' }
        ];

    }


    openPage(page: PageInterface) {
        let params = {};

        if (page.index) {
            params = { tabIndex: page.index }
        }

        /*if (this.nav.getActiveChildNavs()[ 0 ] && page.index != undefined) {
            this.nav.getActiveChildNavs()[ 0 ].select(page.index);
        } else*/ if (page.index == 4) {
            let modal = this.modalCtrl.create(NotificationModal);
            modal.present();
        } else {
            this.nav.setRoot(page.component, params);
        }
    }

    isActive(page: PageInterface) {
        // Again the Tabs Navigation
        /*let childNav = this.nav.getActiveChildNavs()[ 0 ];

        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.component) {
                return 'mainRedColor';
            }
            return;
        }

        // Fallback needed when there is no active childnav (tabs not active)
        if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
            return 'mainRedColor';
        }*/
        return 'mainBlueColor';
    }


}
