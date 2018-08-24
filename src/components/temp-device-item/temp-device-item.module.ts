import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TempDeviceItemComponent } from "./temp-device-item";
import { IonicModule } from "ionic-angular";
import { DeviceGaugeModule } from '../shared/device-gauge';

@NgModule({
    declarations: [
        TempDeviceItemComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        DeviceGaugeModule
    ],
    exports: [
        TempDeviceItemComponent
    ]
})
export class TempDeviceItemModule { }
