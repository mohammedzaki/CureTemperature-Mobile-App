import { Component, ViewEncapsulation } from '@angular/core';
import { NavController, IonicPage, ToastController, ModalController } from 'ionic-angular';
import { Device, Account } from "../../models";
import { DeviceService } from "../../providers/api";
import { SelectDevicePage, DeviceHistoryResultPage } from "../pages";
import { LoadingControllerProvider } from '../../providers';
import * as moment from 'moment';

@IonicPage()
@Component({
    selector: 'page-device-history',
    templateUrl: 'device-history.html',
    encapsulation: ViewEncapsulation.None,
})
export class DeviceHistoryPage {

    device: Device = {};

    rangselector: string = 'day';
    searchType: string = 'day';
    startDate: string = null;
    endDate: string = null;

    selectedDayDate: any = null;
    selectedMonthWeek: any = null;
    selectedWeek: any = null;
    selectedMonth: any = null;
    selectedStartDate: any = null;
    selectedEndDate: any = null;

    account: Account = {
        name: '...',
        place: '...'
    };

    constructor(
        public navCtrl: NavController,
        private deviceService: DeviceService,
        private toastCtrl: ToastController,
        private modalController: ModalController,
        private loadingCtrl: LoadingControllerProvider) {
    }

    getDeviceHistory() {
        if (this.device.id != null) {
            this.setStartEndDates();
            console.log('startDate: ', this.startDate, 'endDate: ', this.endDate);
            this.loadingCtrl.showLoading();
            this.deviceService.getDeviceHistory(this.device.id, this.startDate, this.endDate).subscribe(res => {
                if (res.success) {
                    this.loadResultPage(res.data);
                    this.loadingCtrl.hideLoading();
                }
            }, err => {
                this.loadingCtrl.hideLoading();
                let toast = this.toastCtrl.create({
                    message: err,
                    duration: 3000
                });
                console.log(err);
                toast.present();
            });
        } else {
            let toast = this.toastCtrl.create({
                message: "Please select device first!",
                duration: 3000
            });
            toast.present();
        }
    }

    setStartEndDates() {
        let dFormat = 'YYYY-MM-DD HH:mm:ss';
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
            this.account = this.device.account;
        });
        modal.present();
    }

    loadResultPage(resultData: any) {
        this.navCtrl.push(DeviceHistoryResultPage, { device: this.device, searchType: this.searchType, resultData: resultData, startDate: this.startDate, endDate: this.endDate });
    }
}
