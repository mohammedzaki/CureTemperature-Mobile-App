import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceGaugeModule } from '../shared/device-gauge';
import { TempDeviceHomeComponent } from "./temp-device-home";

@NgModule({
    declarations: [
        TempDeviceHomeComponent
    ],
    imports: [
        CommonModule,
        DeviceGaugeModule
    ],
    exports: [
        TempDeviceHomeComponent
    ]
})
export class TempDeviceHomeModule { }
