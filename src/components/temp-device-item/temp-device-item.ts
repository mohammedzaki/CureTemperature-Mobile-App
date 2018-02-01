import { Component, Input } from '@angular/core';
import { GaugeLabel, GaugeSegment } from "../gauge";
import { colors } from "../shared/colors";
import { Device } from "../../models";

/**
 * Generated class for the TempDeviceItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'temp-device-item',
    templateUrl: 'temp-device-item.html'
})
export class TempDeviceItemComponent {

    @Input() device: Device = {};
    progressGraph: any;

    constructor() {
        console.log('Hello TempDeviceComponent Component');
    }

    ngOnInit() {
        this.progressGraph = {
            bgRadius: 0,
            bgColor: colors.indigo,
            rounded: false,
            reverse: this.device.reverse,
            animationSecs: 2,
            labels: [
                new GaugeLabel({
                    color: colors.black,
                    text: this.device.temp,
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
                    value: this.device.percentage,
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
