import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as io from 'socket.io-client';
import { AuthenticationService } from './authentication.service';
import { ServiceConfig } from '../classes/serviceConfig';
import { GeneralService } from './general.service';
import { ServiceUtils } from '../classes/serviceUtils';
import 'rxjs/add/operator/map';

@Injectable()
export class ChatService {

    private _socket: any;
    private _chatWith: BehaviorSubject<string> = new BehaviorSubject("");
    chatObs = this._chatWith.asObservable();

    private _messages: BehaviorSubject<any> = new BehaviorSubject(null);
    public messages: Observable<any> = this._messages.asObservable();

    constructor(
        private _authethicationService: AuthenticationService, private _generalService: GeneralService
    ) { }

    chatWith(id: string) {
        this._chatWith.next(id);
    }

    // connect to chat server
    connect(id: string): void {
      
        this._socket = io(ServiceConfig.BASE_URL, { path: '/chat' });

        this._socket.on('error', (error) => {
            console.log(error);
        });

        this._socket.on("connect", () => {
            this.sendUser(id);

            console.log("connected to the chat server");
        });
    }

    sendUser(id: string): void
    {
        this._socket.emit("user", { id });
    }

    getConversation(userOneId: string, userTwoId: string): Observable<any> {
        let url = `${ServiceConfig.MESSAGES}/${userOneId}/${userTwoId}`;

        let authToken = this._authethicationService.getUserData().token;

        let headers = ServiceUtils.prepareHeaders(authToken);

        return this._generalService.makeCall(url, "", null, headers)
    }

    sendMessage(message: any, chatWith: string): void {
        this._socket.emit("message", { message: message, to: chatWith });
    }

    receiveMessage(): Observable<any> {
        let observable = new Observable(observer => {
            this._socket.on("message", (data: any) => {                
                observer.next(data);
            });
        });

        return observable;
    }

    disconnect(): void {
        this._socket.disconnect();
    }

}
