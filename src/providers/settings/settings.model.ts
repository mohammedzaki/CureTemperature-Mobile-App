/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

export interface UserPerferedDevicesI {
    uL: number;
    uR: number;
    dL: number;
    dR: number;
}

export interface SettingsModel {
    lang: string;
    userPerferedDevices: UserPerferedDevicesI;
}