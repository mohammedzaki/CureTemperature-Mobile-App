import { Component, OnInit, Input } from '@angular/core';
import { GaugeSegment } from './shared/gauge-segment';
import { GaugeLabel } from './shared/gauge-label';

@Component({
    selector: 'ng-gauge',
    templateUrl: 'gauge.html'
})
export class GaugeComponent implements OnInit {
    @Input() bgRadius = 100;
    @Input() bgColor: string;
    @Input() rounded = true;
    @Input() reverse = false;
    @Input() animationSecs = 0.5;

    @Input() labels: GaugeLabel[];


    @Input()
    set segments(segments: GaugeSegment[]) {
        this.segmentsLoaded = false;
        this.sortedSegments = this.sortSegments(segments);

        // wait a bit and start animation
        setTimeout(
            () => this.segmentsLoaded = true,
            0);
    }
    sortedSegments: GaugeSegment[];
    segmentsLoaded = false;

    isIE11 = /Trident.*rv[ :]*11\./.test(navigator.userAgent);
    transform = 'translate(100px, 100px) rotate(-90deg) scaleY(-1)';


    constructor() { }

    ngOnInit() {
    }

    sortSegments(segments: GaugeSegment[]) {
        return segments && segments.sort((a: GaugeSegment, b: GaugeSegment) => {
            return (a.value / a.goal > b.value / b.goal) ? -1 : 1;
        });
    }

}
