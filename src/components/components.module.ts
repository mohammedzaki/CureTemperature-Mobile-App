import { NgModule } from '@angular/core';
import { GaugeModule } from "./gauge";
import { TempDeviceHomeModule } from "./temp-device-home";
import { TempDeviceItemModule } from "./temp-device-item";
import { DeviceGaugeModule } from './shared/device-gauge';

@NgModule({
    imports: [
        GaugeModule,
        DeviceGaugeModule,
        TempDeviceHomeModule,
        TempDeviceItemModule
    ],
    entryComponents: [
        
    ]
})
export class ComponentsModule { }
