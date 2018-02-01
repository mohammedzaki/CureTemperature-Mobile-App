import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Device } from "../../models";

@IonicPage()
@Component({
    selector: 'page-devices',
    templateUrl: 'devices.html'
})
export class DevicesPage {

    devices: Device[] = [];

    constructor(public navCtrl: NavController) {
    }
    
    ionViewDidLoad() {
        console.log('ionViewDidLoad DevicesPage');
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
}
