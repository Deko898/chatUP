import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { LocalStorageService } from '../../../shared/services/localstorage.service';
import { ChatService } from '../../../shared/services/chat.service';
import { NgForm } from '@angular/forms';
import { User } from '../../../shared/interfaces/user';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
    chatWith: string;
    messageList: any = [];
    conversationId: string;
    id: string;
    user: User;
    friendName: string;
    receiveMessageObs: Subscription;

    constructor
        (
        private _localStorage: LocalStorageService,
        private el: ElementRef,
        private _chatService: ChatService
        ) { }

    ngOnInit() {
        this._chatService.chatObs.subscribe(friendId => {

            this.chatWith = friendId

            this.user = this._localStorage.getItem("user");

            this.getMessages(this.chatWith);

            this.connectToChat(this.user.id);
        });
    }

    connectToChat(id: string): void {
        this._chatService.connect(id);

        this.initReceivers();
    }

    getMessages(id: string): void {
        this._chatService.getConversation(this.user.id, id)
            .subscribe(data => {
                this.conversationId = data.conversationId;
                this.friendName = data.participants[1].firstname;
                this.messageList = data.messages.length ? data.messages : [];

                this.scrollToBottom();
            });
    }

    onChat(form: NgForm) {
        let newMessage: any = {
            created: new Date(),
            from: this.user.firstname,
            text: form.value.message,
            conversationId: this.conversationId
        };
        this._chatService.sendMessage(newMessage, this.chatWith);
        this.messageList.push(newMessage);
        this.scrollToBottom();
        form.reset();
    }

    initReceivers(): void {
        this.receiveMessageObs = this._chatService.receiveMessage()
            .subscribe(message => {
                if (message.conversationId === this.conversationId) {

                    this.messageList.push(message);

                    this.scrollToBottom();
                }
            });
    }

    scrollToBottom(): void {
        let element: any = this.el.nativeElement.querySelector('.chat-container');

        setTimeout(() => {
            element.scrollTop = element.scrollHeight;
        }, 0);

    }

    ngOnDestroy() {
        this.receiveMessageObs.unsubscribe();
    }
}
