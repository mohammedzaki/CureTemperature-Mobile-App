import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { NotificationModal } from "../pages";
import { GaugeSegment, GaugeLabel } from "../../components/gauge/index";
import { AppNotification } from "../../providers/index";
import { Device } from "../../models";

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    devices: Device[] = [];

    constructor(
        public navCtrl: NavController,
        private modalCtrl: ModalController,
        private appNotification: AppNotification) {
        this.setDevices();
    }

    setDevices() {
        this.devices = [
            {
                id: 1,
                place: 'alex',
                hospital: 'el montza',
                descriptoin: 'text of descriptions',
                temp: 39.5,
                alarm: false,
                labels: [
                    new GaugeLabel({
                        color: this.colors.purple,
                        text: '39.5',
                        x: 0,
                        y: 0,
                        fontSize: '2em'
                    })
                ],
                segments: [
                    new GaugeSegment({
                        value: 50,
                        goal: 100,
                        color: this.colors.orange,
                        borderWidth: 20
                    }),
                    new GaugeSegment({
                        value: 125,
                        goal: 150,
                        color: this.colors.red,
                        borderWidth: 20
                    })
                ]
            },
            {
                id: 2,
                place: 'cairo',
                hospital: 'Cairo Hospital',
                descriptoin: 'text of descriptions Cairo Hospital',
                temp: -20,
                alarm: false,
                labels: [
                    new GaugeLabel({
                        color: this.colors.purple,
                        text: '- 20',
                        x: 0,
                        y: 0,
                        fontSize: '2em'
                    })
                ],
                segments: [
                    new GaugeSegment({
                        value: 50,
                        goal: 100,
                        color: this.colors.orange,
                        borderWidth: 20
                    }),
                    new GaugeSegment({
                        value: 125,
                        goal: 150,
                        color: this.colors.red,
                        borderWidth: 20
                    })
                ]
            },
            {
                id: 3,
                place: 'port-said',
                hospital: 'al soliman',
                descriptoin: 'al soliman descriptions',
                temp: -4,
                alarm: false,
                labels: [
                    new GaugeLabel({
                        color: this.colors.purple,
                        text: '- 4',
                        x: 0,
                        y: 0,
                        fontSize: '2em'
                    })
                ],
                segments: [
                    new GaugeSegment({
                        value: 50,
                        goal: 100,
                        color: this.colors.orange,
                        borderWidth: 20
                    }),
                    new GaugeSegment({
                        value: 125,
                        goal: 150,
                        color: this.colors.red,
                        borderWidth: 20
                    })
                ]
            },
            {
                id: 4,
                place: 'cairo',
                hospital: 'kelopatra',
                descriptoin: 'text of descriptions for kelopatra cairo',
                temp: 73.34,
                alarm: false,
                labels: [
                    new GaugeLabel({
                        color: this.colors.purple,
                        text: '73.34',
                        x: 0,
                        y: 0,
                        fontSize: '2em'
                    })
                ],
                segments: [
                    new GaugeSegment({
                        value: 50,
                        goal: 100,
                        color: this.colors.orange,
                        borderWidth: 20
                    }),
                    new GaugeSegment({
                        value: 125,
                        goal: 150,
                        color: this.colors.red,
                        borderWidth: 20
                    })
                ]
            }
        ];
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad HomePage');
        this.appNotification.setAppNotification();
    }

    openNotification() {
        console.log('open Notifications');
        let modal = this.modalCtrl.create(NotificationModal);
        modal.present();
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

    /*
    nautilusGraph = {
        bgRadius: 0,
        bgColor: this.colors.indigo,
        rounded: true,
        reverse: true,
        animationSecs: 2,
        segments: [
            new GaugeSegment({
                value: 4,
                color: this.colors.orange,
                radius: 20,
                borderWidth: 16
            }),
            new GaugeSegment({
                value: 8,
                color: this.colors.purple,
                radius: 36,
                borderWidth: 16
            }),
            new GaugeSegment({
                value: 15,
                color: this.colors.yellow,
                radius: 52,
                borderWidth: 16
            }),
            new GaugeSegment({
                value: 16,
                color: this.colors.cyan,
                radius: 68,
                borderWidth: 16
            }),
            new GaugeSegment({
                value: 23,
                color: this.colors.pink,
                radius: 84,
                borderWidth: 16
            }),
            new GaugeSegment({
                value: 42,
                color: this.colors.mint,
                radius: 100,
                borderWidth: 16
            })
        ]
    };

    laneGraph = {
        bgRadius: 100,
        bgColor: this.colors.indigo,
        rounded: true,
        reverse: true,
        animationSecs: 5,
        segments: [
            new GaugeSegment({
                value: 4,
                color: this.colors.mint,
                bgColor: `${ this.colors.mint }22`,
                radius: 85,
                borderWidth: 2
            }),
            new GaugeSegment({
                value: 8,
                color: this.colors.pink,
                bgColor: `${ this.colors.pink }22`,
                radius: 70,
                borderWidth: 2
            }),
            new GaugeSegment({
                value: 15,
                color: this.colors.cyan,
                bgColor: `${ this.colors.cyan }22`,
                radius: 55,
                borderWidth: 2
            }),
            new GaugeSegment({
                value: 16,
                color: this.colors.yellow,
                bgColor: `${ this.colors.yellow }22`,
                radius: 40,
                borderWidth: 2
            }),
            new GaugeSegment({
                value: 23,
                color: this.colors.purple,
                bgColor: `${ this.colors.purple }22`,
                radius: 25,
                borderWidth: 2
            }),
            new GaugeSegment({
                value: 42,
                color: this.colors.orange,
                bgColor: `${ this.colors.orange }22`,
                radius: 10,
                borderWidth: 2
            })
        ]
    };

    pieGraph = {
        bgRadius: 100,
        bgColor: this.colors.indigo,
        rounded: false,
        reverse: false,
        animationSecs: 3,
        borderWidth: 100,
        segments: [
            new GaugeSegment({
                value: 4,
                goal: 42,
                color: this.colors.pink
            }),
            new GaugeSegment({
                value: 8,
                goal: 42,
                color: this.colors.orange
            }),
            new GaugeSegment({
                value: 15,
                goal: 42,
                color: this.colors.yellow
            }),
            new GaugeSegment({
                value: 16,
                goal: 42,
                color: this.colors.cyan
            }),
            new GaugeSegment({
                value: 23,
                goal: 42,
                color: this.colors.purple
            }),
            new GaugeSegment({
                value: 42,
                goal: 42,
                color: this.colors.mint
            })
        ]
    };
    */

    progressGraph = {
        bgRadius: 0,
        bgColor: this.colors.indigo,
        rounded: false,
        reverse: false,
        animationSecs: 1,
        labels: [
            new GaugeLabel({
                color: this.colors.black,
                text: '- 73',
                x: 1,
                y: 15,
                fontSize: '2.5em'
            })
        ],
        segments: [
            new GaugeSegment({
                value: 100,
                color: this.colors.gray,
                bgColor: this.colors.gray,
                radius: 0,
                borderWidth: 30
            }),
            new GaugeSegment({
                value: 75,
                goal: 100,
                color: this.colors.gradient,
                gradient: {
                    start: this.colors.blue,
                    end: this.colors.red 
                },
                borderWidth: 30
            })
        ]
    };


}
