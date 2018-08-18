import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { NavController, IonicPage, Platform, ToastController, LoadingController, ModalController } from 'ionic-angular';
import { Chart } from 'chart.js';
import { Device, Account } from "../../models";
import * as moment from 'moment';
import { DeviceService } from "../../providers/api";
import { SelectDevicePage } from "../select-device/select-device";

@IonicPage()
@Component({
    selector: 'page-device-history',
    templateUrl: 'device-history.html', encapsulation: ViewEncapsulation.None,
})
export class DeviceHistoryPage {

    @ViewChild('lineCanvas') lineCanvas;
    public device: Device = {};
    lineChart: any;
    rangselector: string = 'day';
    searchType: string = 'day';
    isAndroid: boolean = false;
    startDate: string = null;
    endDate: string = null;

    selectedDayDate = null;
    selectedMonthWeek = null;
    selectedWeek = null;
    selectedMonth = null;
    selectedStartDate = null;
    selectedEndDate = null;
    chartLables = null;

    account: Account = {
        name: 'Cure Group',
        place: 'Sheraton'
    };

    constructor(
        public navCtrl: NavController,
        private platform: Platform,
        private deviceService: DeviceService,
        private toastCtrl: ToastController,
        private modalController: ModalController,
        private loadingCtrl: LoadingController) {
        this.isAndroid = this.platform.is('android');
    }

    ionViewDidLoad() {
    }

    loadLineChart(lables: any, data: any) {
        this.lineChart = new Chart(this.lineCanvas.nativeElement, {
            type: 'line',
            data: this.prepareData(lables, data)
        });
    }

    prepareData(lables: any, data: any) {
        return {
            labels: lables,
            datasets: [ {
                label: "My First dataset",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: data,
                fill: false,
                lineTension: .4,
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                spanGaps: false
            }]
        };
    }

    getDeviceHistory() {
        this.setStartEndDates();
        console.log('startDate: ', this.startDate, 'endDate: ', this.endDate);
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.deviceService.getDeviceHistory(this.device.id, this.startDate, this.endDate).subscribe(res => {
            if (res.success) {
                this.loadLineChart(this.chartLables, res.data);
                loading.dismiss();
            }
        }, err => {
            loading.dismiss();
            let toast = this.toastCtrl.create({
                message: err,
                duration: 6000
            });
            console.log(err);
            toast.present();
        });
    }

    setStartEndDates() {
        let dFormat = 'YYYY-MM-DD HH:mm:ss';
        this.chartLables = [ "January", "February", "March", "April", "May", "June", "July" ];
        switch (this.searchType) {
            case 'day':
                this.startDate = moment(this.selectedDayDate).startOf('day').format(dFormat).toString();
                this.endDate = moment(this.selectedDayDate).endOf('day').format(dFormat).toString();
                break;
            case 'week':
                let weekNum = moment(this.selectedMonthWeek).week() + +this.selectedWeek;
                this.startDate = moment(this.selectedMonthWeek).week(weekNum).startOf('week').format(dFormat).toString();
                this.endDate = moment(this.selectedMonthWeek).week(weekNum).endOf('week').format(dFormat).toString();
                break;
            case 'month':
                this.startDate = moment(this.selectedMonth).startOf('month').format(dFormat).toString();
                this.endDate = moment(this.selectedMonth).endOf('month').format(dFormat).toString();
                break;
            case 'rang':
                this.startDate = moment(this.selectedStartDate).format(dFormat).toString();
                this.endDate = moment(this.selectedEndDate).format(dFormat).toString();
                break;
        }
    }

    setSelected(searchType: any) {
        this.searchType = searchType;
    }

    openSelectDeviceModal() {
        let modal = this.modalController.create(SelectDevicePage);
        // Getting data from the modal:
        modal.onDidDismiss(selectedDevice => {
            this.device = selectedDevice;
        });
        modal.present();
    }

}
