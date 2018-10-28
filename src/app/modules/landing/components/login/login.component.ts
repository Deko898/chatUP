import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../shared/services/authentication.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private _authentication: AuthenticationService, private _router: Router, private _flashMessages: FlashMessagesService) { }

    ngOnInit() {
    }

    onLogin(form: NgForm) {

        if (form.valid)
            this._authentication.loginUser(form.control.value)
                .subscribe(data => {
                    if (data.success) {
                        this._authentication.storeUserData(data.token, data.user)
                        this._flashMessages.show(`Welcome, ${data.user.firstname}`, {
                            cssClass: "alert-success", timeout: 3000
                        });
                    }

                    this._router.navigate(["./chatUP"]);
                }, err => this._flashMessages.show(`Failed to login`, {
                    cssClass: "alert-danger", timeout: 3000
                }))
    }

}
