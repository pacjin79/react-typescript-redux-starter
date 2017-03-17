import env from '../../config/env';
import {Observable} from "rxjs";
import * as fetch from 'isomorphic-fetch';

const {
    apiUrl
} = env;

export class LogonService {
    private static instance: LogonService;
    private constructor() {}

    static getInstance() {
        if(!LogonService.instance) {
            LogonService.instance = new LogonService();
        }
        return LogonService.instance;
    }

    logon(credentials:{email:string, password:string}) {
        return Observable.fromPromise(fetch(apiUrl+'/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        }));
    }
}

export default LogonService.getInstance();