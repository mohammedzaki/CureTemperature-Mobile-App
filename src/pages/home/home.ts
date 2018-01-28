import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { NotificationModal } from "../pages";
import { GaugeSegment, GaugeLabel } from "../../components/gauge/index";
import { AppNotification } from "../../providers/index";
import { Device } from "../../models";

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    devices: Device[] = [];

    constructor(
        public navCtrl: NavController,
        private modalCtrl: ModalController,
        private appNotification: AppNotification) {
        this.setDevices();
    }

    setDevices() {
        this.devices = [
            {
                id: 1,
                place: 'alex',
                hospital: 'el montza',
                descriptoin: 'text of descriptions',
                temp: '39.5',
                percentage: 39.5,
                reverse: false,
                alarm: false
            },
            {
                id: 2,
                place: 'cairo',
                hospital: 'Cairo Hospital',
                descriptoin: 'text of descriptions Cairo Hospital',
                temp: '- 20',
                percentage: 20,
                reverse: true,
                alarm: false
            },
            {
                id: 3,
                place: 'port-said',
                hospital: 'al soliman',
                descriptoin: 'al soliman descriptions',
                temp: '- 4',
                percentage: 4,
                reverse: true,
                alarm: false
            },
            {
                id: 4,
                place: 'cairo',
                hospital: 'kelopatra',
                descriptoin: 'text of descriptions for kelopatra cairo',
                temp: '73.34',
                percentage: 73.34,
                reverse: false,
                alarm: false
            }
        ];
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad HomePage');
        this.appNotification.setAppNotification();
    }

    openNotification() {
        console.log('open Notifications');
        let modal = this.modalCtrl.create(NotificationModal);
        modal.present();
    }

}
