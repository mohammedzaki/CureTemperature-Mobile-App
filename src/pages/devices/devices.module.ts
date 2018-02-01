import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DevicesPage } from './devices';
import { TempDeviceItemModule } from "../../components/temp-device-item";

@NgModule({
    declarations: [
        DevicesPage,
    ],
    imports: [
        IonicPageModule.forChild(DevicesPage),
        TempDeviceItemModule
    ],
})
export class DevicesPageModule { }
