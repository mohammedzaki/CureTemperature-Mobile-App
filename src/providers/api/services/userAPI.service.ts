/**
 * Cure Temprature App
 * Cure Temprature APIs
 *
 * OpenAPI spec version: 1.0.0
 * Contact: mohammedzaki.dev@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams }               from '@angular/common/http';

import { Observable }                                        from 'rxjs/Observable';
import '../rxjs-operators';

import { ExceptionResponse, LoginData, SuccessResponse } from '../../../models';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';
import { APIConstants } from "../api-constants";


@Injectable()
export class UserAPIService {

    protected basePath = APIConstants.API_URL;
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * login to system
     * login
     * @param userLoginData user Login Data
     */
    public apiLogin(userLoginData: LoginData): Observable<SuccessResponse> {
        if (userLoginData === null || userLoginData === undefined) {
            throw new Error('Required parameter userLoginData was null or undefined when calling apiLogin.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];
        let httpContentTypeSelected:string = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/apiLogin`,
            userLoginData,
            {
                headers: headers,
                withCredentials: this.configuration.withCredentials,
            }
        );
    }

    /**
     * update patient
     * This can only be done by the logged in user.
     * @param deviceToken mobile device token
     * @param deviceType mobile device type
     * @param userId user resource id
     */
    public saveUserDeviceToken(deviceToken: string, deviceType: string, userId: number): Observable<SuccessResponse> {
        if (deviceToken === null || deviceToken === undefined) {
            throw new Error('Required parameter deviceToken was null or undefined when calling saveUserDeviceToken.');
        }
        if (deviceType === null || deviceType === undefined) {
            throw new Error('Required parameter deviceType was null or undefined when calling saveUserDeviceToken.');
        }
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling saveUserDeviceToken.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (deviceToken !== undefined) {
            queryParameters = queryParameters.set('deviceToken', <any>deviceToken);
        }
        if (deviceType !== undefined) {
            queryParameters = queryParameters.set('deviceType', <any>deviceType);
        }

        let headers = this.defaultHeaders;

        // authentication (cure_auth2) required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.put<any>(`${this.basePath}/SaveDeviceToken/${encodeURIComponent(String(userId))}`,
            null,
            {
                params: queryParameters,
                headers: headers,
                withCredentials: this.configuration.withCredentials,
            }
        );
    }

}
