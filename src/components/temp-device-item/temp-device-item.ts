import { Component, Input } from '@angular/core';
import { Device } from "../../models";
import { AlertController } from "ionic-angular";
import { AppConstants, Settings } from "../../providers";

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
    testRadioOpen = false;
    testRadioResult: any;
    testCheckboxOpen = false;
    testCheckboxResult: any;
    settingsReady = false;

    constructor(
        private alertCtrl: AlertController,
        private settings: Settings) {
        this.settings.load().then(() => {
            this.settingsReady = true;
        });
    }

    addToHome() {
        if (this.settingsReady) {
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
                    var userPerferedDevices = this.settings.allSettings.userPerferedDevices;
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
                    this.settings.setValue(AppConstants.USER_PREFERED_DEVICES, userPerferedDevices)
                }
            });

            alert.present();
        }
    }

}
