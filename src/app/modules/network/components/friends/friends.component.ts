import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { User } from '../../../shared/interfaces/user';
import { Observable } from 'rxjs/Observable';
import { ChatService } from '../../../shared/services/chat.service';

@Component({
    selector: 'app-friends',
    templateUrl: './friends.component.html',
    styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

    users: Observable<User[]>

    constructor(private _userService: UserService, private _chatService: ChatService) { }

    ngOnInit() {
        this.users = this._userService.getAll();
    }

    connect(id: string): void {
        this._chatService.chatWith(id);
    }

}
