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



export interface DeviceFeeds {
    /**
     * id
     */
    id?: number;
    /**
     * humidity
     */
    humidity?: number;
    /**
     * temperature
     */
    temperature?: number;
    /**
     * device_id
     */
    deviceId?: number;
    /**
     * device_serial_number
     */
    serialNumber?: string;
}
