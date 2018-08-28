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

    constructor(public navCtrl: NavController,
        public settings: Settings,
        public formBuilder: FormBuilder,
        public navParams: NavParams,
        public translateService: TranslateService,
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

        this.settings.load().then(() => {
            this.settingsReady = true;
            this.options = this.settings.allSettings;

            this._buildForm();
        });
    }
}
