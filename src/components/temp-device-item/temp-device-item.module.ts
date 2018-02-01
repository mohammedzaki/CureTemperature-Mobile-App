import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaugeModule } from "../gauge";
import { TempDeviceItemComponent } from "./temp-device-item";
import { IonicModule } from "ionic-angular";

@NgModule({
    declarations: [
        TempDeviceItemComponent
    ],
    imports: [
        CommonModule,
        GaugeModule,
        IonicModule
    ],
    exports: [
        TempDeviceItemComponent
    ]
})
export class TempDeviceItemModule { }
