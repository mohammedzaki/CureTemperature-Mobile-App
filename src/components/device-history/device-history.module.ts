import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from "ionic-angular";
import { DeviceHistoryComponent } from "./device-history";

@NgModule({
    declarations: [
        DeviceHistoryComponent
    ],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [
        DeviceHistoryComponent
    ]
})
export class DeviceHistoryModule { }
