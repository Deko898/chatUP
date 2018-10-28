import { Component, OnInit, Input } from '@angular/core';
import { LocalStorageService } from '../../../../shared/services/localstorage.service';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

    @Input() message: any;
    firstname: string;

    constructor(private _localStorage: LocalStorageService) { }

    ngOnInit() {
        // this._localStorage.getItem("user").firstname;
    }

}
