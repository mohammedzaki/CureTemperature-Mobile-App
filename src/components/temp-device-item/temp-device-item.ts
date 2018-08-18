import { Component, Input } from '@angular/core';
import { GaugeLabel, GaugeSegment } from "../gauge";
import { colors } from "../shared/colors";
import { Device } from "../../models";
import { AlertController } from "ionic-angular";
import { AppConstants } from "../../providers/index";

/**
 * Generated class for the TempDeviceItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'temp-device-item',
    templateUrl: 'temp-device-item.html'
})
export class TempDeviceItemComponent {

    @Input() device: Device = {};
    progressGraph: any;
    testRadioOpen = false;
    testRadioResult: any;
    testCheckboxOpen = false;
    testCheckboxResult: any;

    constructor(public alertCtrl: AlertController) {
        console.log('Hello TempDeviceComponent Component');
    }

    ngOnInit() {
        this.progressGraph = {
            bgRadius: 0,
            bgColor: colors.indigo,
            rounded: false,
            reverse: this.device.reverse,
            animationSecs: 2,
            labels: [
                new GaugeLabel({
                    color: colors.black,
                    text: this.device.temp,
                    x: 0,
                    y: 12,
                    fontSize: '3.3rem'
                })
            ],
            segments: [
                new GaugeSegment({
                    value: 100,
                    color: colors.gray,
                    bgColor: colors.gray,
                    radius: 0,
                    borderWidth: 25
                }),
                new GaugeSegment({
                    value: this.device.percentage,
                    goal: 100,
                    color: colors.gradient,
                    gradient: {
                        start: colors.blue,
                        end: colors.red
                    },
                    borderWidth: 25
                })
            ]
        };
    }

    addToHome() {

        let alert = this.alertCtrl.create();
        alert.setTitle('Lightsaber color');

        alert.addInput({
            type: 'radio',
            label: 'Upper Left',
            value: 'uL'
        });

        alert.addInput({
            type: 'radio',
            label: 'Upper Right',
            value: 'uR'
        });

        alert.addInput({
            type: 'radio',
            label: 'Down Left',
            value: 'dL'
        });

        alert.addInput({
            type: 'radio',
            label: 'Down Right',
            value: 'dR'
        });

        alert.addButton('Cancel');

        alert.addButton({
            text: 'Ok',
            handler: (key: any) => {
                var storage = window.localStorage;
                var userPerferedDevices = JSON.parse(storage.getItem(AppConstants.USER_PREFERED_DEVICES));
                switch (key) {
                    case 'uL':
                        userPerferedDevices.uL = this.device.id;
                        break;
                    case 'uR':
                        userPerferedDevices.uR = this.device.id;
                        break;
                    case 'dL':
                        userPerferedDevices.dL = this.device.id;
                        break;
                    case 'dR':
                        userPerferedDevices.dR = this.device.id;
                        break;
                    default:
                        break;
                }
                storage.setItem(AppConstants.USER_PREFERED_DEVICES, JSON.stringify(userPerferedDevices));
            }
        });

        alert.present();
    }
    
    

}
