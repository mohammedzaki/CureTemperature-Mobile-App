import { NgModule } from '@angular/core';
import { GaugeModule } from "./gauge";
import { TempDeviceModule } from "./temp-device";

@NgModule({
    imports: [
        GaugeModule,
        TempDeviceModule
    ]
})
export class ComponentsModule { }
