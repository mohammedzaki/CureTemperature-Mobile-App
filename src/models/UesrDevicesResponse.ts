/**
 * Cure-Temperature APIs
 * This is Cure-Temperature server. You can use the api key `special-key` to test the authorization filters.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: mohammedzaki.dev@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { Device } from './device';
import { Account } from './account';

export interface UesrDevicesResponse {


    success?: boolean;
    data?: {
        account?: Account;
        devices?: Array<Device>;
    };
    message?: string;
}
