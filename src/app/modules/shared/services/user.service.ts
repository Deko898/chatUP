import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable, BehaviorSubject } from 'rxjs';
import { GeneralService } from './general.service';
import "rxjs/add/operator/do";
import { ServiceConfig } from '../classes/serviceConfig';

@Injectable()
export class UserService {

    private _user: BehaviorSubject<User[]> = new BehaviorSubject(null);
    public user: Observable<User[]> = this._user.asObservable();

    constructor(private _generalService: GeneralService) {

    }

    getAll(): Observable<User[]> {
        return this._generalService.makeCall(ServiceConfig.USERS, "")
    }

    getById(id: number) {
        //return this.http.get('/api/users/' + id);
    }

    create(user: User) {
        //return this.http.post('/api/users', user);
    }

    update(user: User) {
        //return this.http.put('/api/users/' + user.id, user);
    }

    delete(id: number) {
        // return this.http.delete('/api/users/' + id);
    }

}
