import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceGaugeModule } from '../shared/device-gauge';
import { TempDeviceComponent } from "./temp-device";

@NgModule({
    declarations: [
        TempDeviceComponent
    ],
    imports: [
        CommonModule,
        DeviceGaugeModule
    ],
    exports: [
        TempDeviceComponent
    ]
})
export class TempDeviceModule { }
