import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../shared/services/authentication.service';
import { Observable } from 'rxjs';
import { User } from '../../../shared/interfaces/user';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    userProfile: Observable<User>

    constructor(private _authentication: AuthenticationService) { }

    ngOnInit() {
        this.userProfile =  this._authentication.getProfile();
    }

    edit()
    {
        
    }

}
