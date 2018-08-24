import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform, Events } from 'ionic-angular';

import { FirstRunPage, MainPage } from '../pages/pages';
import { Settings } from '../providers/providers';
import { UserAPIService } from "../providers/api";

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    
    @ViewChild(Nav) nav: Nav;

    constructor(
        private translate: TranslateService,
        private platform: Platform,
        private settings: Settings,
        private config: Config,
        private statusBar: StatusBar,
        private splashScreen: SplashScreen,
        private loginApi: UserAPIService,
        private events: Events) {

        this.startApp();

        this.events.subscribe('language:changed', pageIndex => {
            this.restartApp(MainPage, { pageIndex: pageIndex });
        });
        this.events.subscribe('user:logout', componentPage => {
            this.restartApp(componentPage);
        });
    }

    initTranslate() {
        let lang = this.settings.allSettings.lang;
        this.translate.setDefaultLang(lang);
        this.translate.use(lang);
        if (lang == 'ar') {
            this.platform.setDir('rtl', true);
        } else {
            this.platform.setDir('ltr', true);
        }
        this.translate.get([ 'BACK_BUTTON_TEXT' ]).subscribe(values => {
            this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
        });
    }

    startApp(mainPage = MainPage, params = {}) {
        this.settings.load().then(() => {
            this.initTranslate();
            this.nav.setRoot(this.loginApi.isAuthenticated() ? mainPage : FirstRunPage, params);
            this.platform.ready().then(() => {
                // Okay, so the platform is ready and our plugins are available.
                // Here you can do any higher level native things you might need.
                this.statusBar.styleDefault();
                this.splashScreen.hide();
            });
        });
    }

    restartApp(componentPage = MainPage, params = {}) {
        this.startApp(componentPage, params);
    }
}
