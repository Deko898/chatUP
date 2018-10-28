import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Patterns } from '../../../shared/classes/patterns';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../shared/services/authentication.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    patterns: Patterns = new Patterns();
    pattern = this.patterns.getPatterns();

    constructor
        (
            private _authentication: AuthenticationService,
            private _router: Router,
            private _flashMessages: FlashMessagesService
        ) { }

    ngOnInit() { }

    onRegister(form: NgForm) {
        if (form.valid) {
            this._authentication.registerUser(form.control.value)
                .subscribe(
                    res => {
                        this._flashMessages.show("Successfully registered!", {
                            cssClass: "alert-success", timeout: 3000
                        });

                        this._router.navigate(['/login']);
                    },
                    err => {
                        const parsedError = JSON.parse(err._body);
                        this._flashMessages.show(parsedError.msg, {
                            cssClass: "alert-danger", timeout: 6000
                        }

                        )
                    })

        }

    }

}
