import { Injectable } from '@angular/core';
import { GeneralService } from './general.service';
import { ServiceConfig } from '../classes/serviceConfig';
import { User, userResponse } from '../interfaces/user';
import { Observable } from 'rxjs/Observable';
import { LocalStorageService } from './localstorage.service';
import { ServiceUtils } from '../classes/serviceUtils';

@Injectable()
export class AuthenticationService {

    private _authToken: string;

    user: User;

    constructor(private _generalService: GeneralService, private _localStorage: LocalStorageService) { }


    registerUser(user: User): Observable<User> {

        return this._generalService.makeCall(ServiceConfig.USER_REGISTER, "post", user, ServiceConfig.HEADERS_APPLICATION_JSON);
    }

    loginUser(user): Observable<userResponse> {

        return this._generalService.makeCall(ServiceConfig.USER_LOGIN, "post", user, ServiceConfig.HEADERS_APPLICATION_JSON);
    }

    getProfile(): Observable<User> {
        let headers = ServiceUtils.prepareHeaders(this._authToken);
        this.loadToken();

        return this._generalService.makeCall(ServiceConfig.USER_PROFILE, "", null, headers)
    }


    storeUserData(token, user) {
        this._authToken = token;
        this.user = user;
        this._localStorage.setItem("id_token", token)
        this._localStorage.setItem("user", JSON.stringify(user))
    }

    loadToken() {
        const token = this._localStorage.getItem("id_token");
        this._authToken = token;
    }

    getUserData(): any {
        this.loadCredentials();
        let user = this.user;
        let data = { token: this._authToken, user };

        return data;
    }

    loadCredentials(): void {
        let token = this._localStorage.getItem("id_token");
        let user = this._localStorage.getItem("user");
        this._authToken = token;
        this.user = user;
    }

    isLoggedIn() {
        this.loadToken();
        return this._authToken ? true : false;
    }

    logout() {
        this._authToken = null;
        this.user = null;
        this._localStorage.clean();
    }

}
