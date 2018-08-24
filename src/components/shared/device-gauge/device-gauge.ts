import { Component, Input } from '@angular/core';
import { GaugeLabel, GaugeSegment } from "../../gauge";
import { Device } from "../../../models";
import { colors } from "../colors";
/**
 * Generated class for the TempDeviceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'device-gauge',
    templateUrl: 'device-gauge.html'
})
export class DeviceGaugeComponent {

    @Input() deviceData: Device = {};
    progressGraph: any;
    
    constructor() {
        
    }

    ngOnInit() {
        this.progressGraph = null;
        // 
        this.progressGraph = {
            bgRadius: 0,
            bgColor: colors.indigo,
            rounded: false,
            reverse: (+this.deviceData.reverse == 1) ? true : false,
            animationSecs: 2,
            labels: [
                new GaugeLabel({
                    color: colors.black,
                    text: this.deviceData.temp,
                    x: 0,
                    y: 12,
                    fontSize: '3.3rem'
                })
            ],
            segments: [
                new GaugeSegment({
                    value: 100,
                    color: colors.gray,
                    bgColor: colors.gray,
                    radius: 0,
                    borderWidth: 25
                }),
                new GaugeSegment({
                    value: Math.abs(+this.deviceData.temp),
                    goal: 100,
                    color: colors.gradient,
                    gradient: {
                        start: colors.blue,
                        end: colors.red
                    },
                    borderWidth: 25
                })
            ]
        };
    }
    
}
