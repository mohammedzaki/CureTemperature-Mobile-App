import { Component } from '@angular/core';

/**
 * Generated class for the DeviceHistoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'device-history',
    templateUrl: 'device-history.html'
})
export class DeviceHistoryComponent {

    text: string;

    constructor() {
        console.log('Hello DeviceHistoryComponent Component');
        this.text = 'Hello World';
        console.log('ionViewDidLoad DeviceHistoryPage');
        
    }
    barChart: any;

}
