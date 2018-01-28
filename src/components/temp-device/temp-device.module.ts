import { NgModule } from '@angular/core';
import { TempDeviceComponent } from "./temp-device";
import { CommonModule } from '@angular/common';
import { GaugeModule } from "../gauge";

@NgModule({
    declarations: [
        TempDeviceComponent
    ],
    imports: [
        CommonModule,
        GaugeModule
    ],
    exports: [
        TempDeviceComponent
    ]
})
export class TempDeviceModule { }
