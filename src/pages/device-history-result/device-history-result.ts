import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { NavController, IonicPage, NavParams, Events } from 'ionic-angular';
import { Chart } from 'chart.js';
import { Device } from "../../models";
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { AppConstants } from '../../providers';

@IonicPage()
@Component({
    selector: 'page-device-history-result',
    templateUrl: 'device-history-result.html',
    encapsulation: ViewEncapsulation.None,
})
export class DeviceHistoryResultPage {

    @ViewChild('lineCanvas') lineCanvas: any;
    lineChart: any;
    searchType: string = 'day';
    chartLables: any = null;
    resultData: any = null;
    startDate: string = null;
    endDate: string = null;
    device: Device = {};

    constructor(
        public navCtrl: NavController,
        private params: NavParams,
        private screenOrientation: ScreenOrientation,
        private events: Events) {
        this.searchType = this.params.get('searchType');
        this.resultData = this.params.get('resultData');
        this.startDate = this.params.get('startDate');
        this.endDate = this.params.get('endDate');
        this.device = this.params.get('device');
    }

    ionViewDidLoad() {
        this.loadResultChart();
    }

    ionViewWillEnter() {
        this.events.publish(AppConstants.EVENTS.CHANGE_ORIENTATION, this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    }

    ionViewDidLeave() {
        this.events.publish(AppConstants.EVENTS.CHANGE_ORIENTATION, this.screenOrientation.ORIENTATIONS.PORTRAIT);
    }

    loadResultChart() {
        this.lineChart = new Chart(this.lineCanvas.nativeElement, {
            type: 'line',
            data: this.prepareData(this.resultData.dateLables, this.resultData.tempHistory),
            options: {
                scales: {
                    xAxes: [ {
                        ticks: {
                            autoSkip: true
                        }
                    } ],
                    yAxes: [ {
                        scaleLabel: {
                            display: true,
                            labelString: 'Temperature degree',
                        },
                        ticks: {
                            stepSize: 5
                        }
                    } ]
                }
            }
        });
    }

    prepareData(lables: any, data: any) {
        return {
            labels: lables,
            datasets: [ {
                label: "Temperature History",
                data: data,
                type: 'line',
                pointRadius: 0,
                fill: false,
                lineTension: 0,
                borderWidth: 2,
                backgroundColor: 'rgb(255, 0, 0)',
                borderColor: 'rgb(255, 0, 0)'
            } ]
        };
    }

}