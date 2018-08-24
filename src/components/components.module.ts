import { NgModule } from '@angular/core';
import { GaugeModule } from "./gauge";
import { TempDeviceModule } from "./temp-device";
import { TempDeviceItemModule } from "./temp-device-item";
import { DeviceGaugeModule } from './shared/device-gauge';

@NgModule({
    imports: [
        GaugeModule,
        DeviceGaugeModule,
        TempDeviceModule,
        TempDeviceItemModule
    ],
    entryComponents: [
        
    ]
})
export class ComponentsModule { }
