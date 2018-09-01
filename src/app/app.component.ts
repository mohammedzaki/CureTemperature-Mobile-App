import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform, Events } from 'ionic-angular';
import { FirstRunPage, MainPage } from '../pages/pages';
import { Settings, AppConstants } from '../providers';
import { UserAPIService } from "../providers/api";
import { ScreenOrientation } from '@ionic-native/screen-orientation';

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
        private events: Events,
        private screenOrientation: ScreenOrientation) {

        this.startApp();

        this.events.subscribe(AppConstants.EVENTS.LANGUAGE_CHANGED, pageName => {
            this.restartApp(MainPage, { pageName: pageName });
        });
        this.events.subscribe(AppConstants.EVENTS.USER_LOGOUT, componentPage => {
            this.restartApp(componentPage);
        });
        this.events.subscribe(AppConstants.EVENTS.CHANGE_ORIENTATION, orientation => {
            this.changeOrientation(orientation);
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
                this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
            });
        });
    }

    restartApp(componentPage = MainPage, params = {}) {
        this.startApp(componentPage, params);
    }

    changeOrientation(orientation: string) {
        this.screenOrientation.lock(orientation);
    }
}
