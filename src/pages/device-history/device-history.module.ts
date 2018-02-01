import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeviceHistoryPage } from './device-history';
import { DeviceHistoryModule } from "../../components/device-history/device-history.module";

@NgModule({
    declarations: [
        DeviceHistoryPage,
    ],
    imports: [
        IonicPageModule.forChild(DeviceHistoryPage),
        DeviceHistoryModule
    ],
})
export class DeviceHistoryPageModule { }
