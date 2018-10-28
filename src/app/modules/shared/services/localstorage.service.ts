import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

    constructor() {
    }

    setItem(key, data) {
        let toStore = data;

        if (typeof data === 'object') {
            toStore.system_time = (new Date()).getTime();
            toStore = JSON.stringify(data);
        }

        localStorage.setItem(key, toStore);

    }

    getItem(key) {
        try {
            let data = JSON.parse(localStorage.getItem(key));
            return data;
        }
        catch (e) {
            return localStorage.getItem(key);
        }
    }

    deleteItem(key) {
        return localStorage.removeItem(key);
    }

    clean() {
        localStorage.clear();
    }
}
