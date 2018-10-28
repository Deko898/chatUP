import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { LocalStorageService } from '../../services/localstorage.service';
import { ChatService } from '../../services/chat.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    firstname: string

    constructor
        (
        private _router: Router,
        private _chatService: ChatService,
        private _flashMessages: FlashMessagesService,
        public _authentication: AuthenticationService
        ) { }

    ngOnInit() {
        // const { firstname } = this._localStorage.getItem("user");
        // this.firstname = firstname;
    }

    onLogout() {
        this._router.navigate(["./login"])
        this._flashMessages.show("You've been succesfully logged out.", {
            cssClass: "alert-success", timeout: 3000
        });
        this._authentication.logout();
        this._chatService.disconnect();
    }

}
