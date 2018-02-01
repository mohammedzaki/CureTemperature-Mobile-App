import { Component, ViewEncapsulation } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
//import { HomePage, DevicesPage } from "../pages";
import { DeviceHistoryComponent } from "../../components/device-history/device-history";

@IonicPage()
@Component({
    selector: 'page-device-history',
    templateUrl: 'device-history.html',encapsulation: ViewEncapsulation.None,
})
export class DeviceHistoryPage {
    
    tab1Root: any = DeviceHistoryComponent;
    tab2Root: any = DeviceHistoryComponent;
    tab3Root: any = DeviceHistoryComponent;
    tab4Root: any = DeviceHistoryComponent;
    
    constructor(public navCtrl: NavController) {
    }

}
