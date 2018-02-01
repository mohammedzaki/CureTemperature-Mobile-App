/*import {LoginApi} from "./LoginApi";
import {UserProfileApi} from "./UserProfileApi";

export {
  LoginApi,
  UserProfileApi
};*/

export * from './services/userAPI.service';
export * from './api-constants';
import { UserAPIService } from './services/userAPI.service';
export const APIS = [UserAPIService];