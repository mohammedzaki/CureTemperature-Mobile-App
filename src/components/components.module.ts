import { NgModule } from '@angular/core';
import { GaugeModule } from "./gauge";
import { TempDeviceModule } from "./temp-device";
import { TempDeviceItemModule } from "./temp-device-item";
import { DeviceHistoryModule } from "./device-history/device-history.module";
import { DeviceHistoryComponent } from "./device-history/device-history";

@NgModule({
    imports: [
        GaugeModule,
        TempDeviceModule,
        TempDeviceItemModule,
        DeviceHistoryModule
    ],
    entryComponents: [
        DeviceHistoryComponent
    ]
})
export class ComponentsModule { }
