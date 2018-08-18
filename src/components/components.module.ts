import { NgModule } from '@angular/core';
import { GaugeModule } from "./gauge";
import { TempDeviceModule } from "./temp-device";
import { TempDeviceItemModule } from "./temp-device-item";

@NgModule({
    imports: [
        GaugeModule,
        TempDeviceModule,
        TempDeviceItemModule
    ],
    entryComponents: [
        
    ]
})
export class ComponentsModule { }
