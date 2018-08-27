import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Settings, AppConstants } from '../../providers';

/**
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
@IonicPage()
@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html'
})
export class SettingsPage {
    // Our local settings object
    options: any;

    settingsReady = false;

    form: FormGroup;

    profileSettings = {
        page: 'profile',
        pageTitleKey: 'SETTINGS_PAGE_PROFILE'
    };

    page: string = 'main';
    pageTitleKey: string = 'SETTINGS_TITLE';
    pageTitle: string;


    constructor(public navCtrl: NavController,
        public settings: Settings,
        public formBuilder: FormBuilder,
        public navParams: NavParams,
        public translate: TranslateService,
        private events: Events) {
    }

    _buildForm() {
        let group: any = {
            lang: [ this.options.lang ]
        };
        
        this.form = this.formBuilder.group(group);

        // Watch the form for changes, and
        this.form.valueChanges.subscribe((v) => {
            this.checkLanguageChanged(this.form.value.lang);
        });
    }

    checkLanguageChanged(lang) {
        if (this.settings.allSettings.lang != lang) {
            this.settings.merge(this.form.value);
            setTimeout(() => {
                this.events.publish(AppConstants.EVENTS.LANGUAGE_CHANGED, this.navCtrl.getActive().name); 
            }, 100);
        } else {
            this.settings.merge(this.form.value);
        }
    }

    ionViewDidLoad() {
        // Build an empty form for the template to render
        this.form = this.formBuilder.group({});
    }

    ionViewWillEnter() {
        // Build an empty form for the template to render
        this.form = this.formBuilder.group({});

        //this.page = this.navParams.get('page') || this.page;
        //this.pageTitleKey = this.navParams.get('pageTitleKey') || this.pageTitleKey;

        this.translate.get(this.pageTitleKey).subscribe((res) => {
            this.pageTitle = res;
        })

        this.settings.load().then(() => {
            this.settingsReady = true;
            this.options = this.settings.allSettings;

            this._buildForm();
        });
    }
}
