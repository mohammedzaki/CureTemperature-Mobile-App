import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DevicesPage } from '../devices/devices';
import { DeviceHistoryPage } from "../device-history/device-history";

@IonicPage()
@Component({
    selector: 'page-tabs-controller',
    templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

    tab1Root: any = HomePage;
    tab2Root: any = DevicesPage;
    tab3Root: any = DeviceHistoryPage;
    constructor(public navCtrl: NavController) {
    }

}
