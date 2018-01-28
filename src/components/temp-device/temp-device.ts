import { Component, Input } from '@angular/core';
import { GaugeLabel, GaugeSegment } from "../gauge";
import { Device } from "../../models";

/**
 * Generated class for the TempDeviceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'temp-device',
    templateUrl: 'temp-device.html'
})
export class TempDeviceComponent {

    @Input() device: Device = {};
    progressGraph: any;

    constructor() {
        console.log('Hello TempDeviceComponent Component');
    }

    ngOnInit() {
        this.progressGraph = {
            bgRadius: 0,
            bgColor: this.colors.indigo,
            rounded: false,
            reverse: this.device.reverse,
            animationSecs: 2,
            labels: [
                new GaugeLabel({
                    color: this.colors.black,
                    text: this.device.temp,
                    x: 0,
                    y: 12,
                    fontSize: '3.3rem'
                })
            ],
            segments: [
                new GaugeSegment({
                    value: 100,
                    color: this.colors.gray,
                    bgColor: this.colors.gray,
                    radius: 0,
                    borderWidth: 25
                }),
                new GaugeSegment({
                    value: this.device.percentage,
                    goal: 100,
                    color: this.colors.gradient,
                    gradient: {
                        start: this.colors.blue,
                        end: this.colors.red
                    },
                    borderWidth: 25
                })
            ]
        };
    }

    colors = {
        indigo: '#14143e',
        pink: '#fd1c49',
        orange: '#ff6e00',
        yellow: '#f0c800',
        mint: '#00efab',
        cyan: '#05d1ff',
        purple: '#841386',

        white: '#fff',
        gray: '#E5E5E5',
        blue: '#4781D3',
        red: '#DD4F5B',
        black: '#000000',
        gradient: 'url(#gradient)'
    };


}
