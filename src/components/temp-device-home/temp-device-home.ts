import { Component, Input } from '@angular/core';
import { Device } from "../../models";

/**
 * Generated class for the TempDeviceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'temp-device-home',
    templateUrl: 'temp-device-home.html'
})
export class TempDeviceHomeComponent {

    @Input() device: Device = {};
    
    constructor() {
        
    }
}