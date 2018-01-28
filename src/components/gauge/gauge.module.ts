import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GaugeComponent } from './gauge';

@NgModule({
    declarations: [
        GaugeComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [],
    bootstrap: [
        GaugeComponent
    ],
    exports: [
        GaugeComponent
    ]
})
export class GaugeModule { }
