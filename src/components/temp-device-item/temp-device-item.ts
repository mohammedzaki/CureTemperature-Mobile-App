import { Component, Input } from '@angular/core';
import { Device } from "../../models";
import { AlertController } from "ionic-angular";
import { AppConstants, Settings } from "../../providers";
import { TranslateService } from '@ngx-translate/core';

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
    translateValues: any;

    constructor(
        private alertCtrl: AlertController,
        private settings: Settings,
        private translateService: TranslateService) {
        this.settings.load().then(() => {
            this.settingsReady = true;
        });    
        this.translateService.get(['Select Home Position', 'Upper Left', 'Upper Right', 'Down Left', 'Down Right', 'CANCEL_BUTTON', 'OK_BUTTON']).subscribe((values) => {
            this.translateValues = values;
        });
    }

    addToHome() {
        if (this.settingsReady) {
            let alert = this.alertCtrl.create();
            alert.setTitle(this.translateValues['Select Home Position']);

            alert.addInput({
                type: 'radio',
                label: this.translateValues['Upper Left'],
                value: 'uL'
            });

            alert.addInput({
                type: 'radio',
                label: this.translateValues['Upper Right'],
                value: 'uR'
            });

            alert.addInput({
                type: 'radio',
                label: this.translateValues['Down Left'],
                value: 'dL'
            });

            alert.addInput({
                type: 'radio',
                label: this.translateValues['Down Right'],
                value: 'dR'
            });
            
            alert.addButton(this.translateValues['CANCEL_BUTTON']);

            alert.addButton({
                text: this.translateValues['OK_BUTTON'],
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
