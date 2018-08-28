import { Injectable } from '@angular/core';
import { LoadingController, Loading } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class LoadingControllerProvider {

    loading: Loading;

    constructor(
        private loadingCtrl: LoadingController,
        private translateService: TranslateService) {
    }

    showLoading() {
        this.translateService.get('Please wait').subscribe((value) => {
            this.loading = this.loadingCtrl.create({
                content: value
            });
            this.loading.present();
        });
    }

    hideLoading() {
        this.loading.dismiss();
    }

}
