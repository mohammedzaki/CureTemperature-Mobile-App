import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaugeModule } from "../../gauge";
import { DeviceGaugeComponent } from "./device-gauge";

@NgModule({
    declarations: [
        DeviceGaugeComponent
    ],
    imports: [
        CommonModule,
        GaugeModule
    ],
    exports: [
        DeviceGaugeComponent
    ]
})
export class DeviceGaugeModule { }
