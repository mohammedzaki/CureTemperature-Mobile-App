import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav } from 'ionic-angular';
import { MainPage } from "../pages";
import { HomePage } from "../home/home";

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
    rootPage = MainPage;

    @ViewChild(Nav) nav: Nav;
    pages: PageInterface[];

    constructor() {

        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', pageName: 'HomePage', component: HomePage, index: 0, icon: 'ios-home' },
            //{ title: 'Devices', pageName: 'DevicesPage', component: DevicesPage, index: 1, icon: 'ios-cart' },
            //{ title: 'Device History', pageName: 'DeviceHistoryPage', component: DeviceHistoryPage, index: 3, icon: 'contacts' },
            //{ title: 'About', pageName: 'AboutPage', component: AboutPage, index: 4, icon: 'information-circle' }
        ];

    }

    openPage(page: PageInterface) {
        let params = {};

        if (page.index) {
            params = { tabIndex: page.index }
        }

        if (this.nav.getActiveChildNavs()[ 0 ] && page.index != undefined) {
            this.nav.getActiveChildNavs()[ 0 ].select(page.index);
        } else {
            this.nav.setRoot(page.component, params);
        }
    }

    isActive(page: PageInterface) {
        // Again the Tabs Navigation
        let childNav = this.nav.getActiveChildNavs()[ 0 ];

        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.component) {
                return 'primary';
            }
            return;
        }

        // Fallback needed when there is no active childnav (tabs not active)
        if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
            return 'primary';
        }
        return;
    }
}
