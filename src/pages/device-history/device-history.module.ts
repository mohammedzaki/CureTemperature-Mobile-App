import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeviceHistoryPage } from './device-history';

@NgModule({
    declarations: [
        DeviceHistoryPage,
    ],
    imports: [
        IonicPageModule.forChild(DeviceHistoryPage)
    ],
})
export class DeviceHistoryPageModule { }
