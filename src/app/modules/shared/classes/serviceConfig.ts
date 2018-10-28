import { Headers } from "@angular/http";

export class ServiceConfig {

    /*** URL ***/

    public static BASE_URL = "http://localhost:3000";

    /*** USER ***/

    public static USERS = `${ServiceConfig.BASE_URL}/users`;
    public static USER_REGISTER = `${ServiceConfig.BASE_URL}/users/register`;
    public static USER_LOGIN = `${ServiceConfig.BASE_URL}/users/login`;
    public static USER_PROFILE = `${ServiceConfig.BASE_URL}/users/profile`;


    /*** MESSAGES ***/

    public static MESSAGES = `${ServiceConfig.BASE_URL}/messages`;


    /* Headers */
    
    public static HEADERS_FORM_URLENCODED = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    public static HEADERS_APPLICATION_JSON = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
    public static HEADERS_AUTH = new Headers({ 'Authorization': 'Basic ' });

}