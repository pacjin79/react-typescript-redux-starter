import {ActionsObservable} from "redux-observable";
import {Observable} from "rxjs";
import {ActionTypes, logonSuccess, logonFailed} from "../actions/auth.actions";
import LogonService from "../services/logon.service";
import {push} from 'connected-react-router';

export const logonEpic = (action$: ActionsObservable<{email: string, password: string}>) => (
    action$.ofType(ActionTypes.LOG_ON)
        .map(action => action.payload)
        .switchMap((credentials: {email: string, password: string}) => {
            return LogonService.logon(credentials)
                .switchMap(res => res.json())
                .map((data: {isAuthenticated: boolean}) => {
                    if(data.isAuthenticated) {
                        return logonSuccess(data);
                    } else {
                        return logonFailed(data);
                    }
                })
                .catch((e: Error) =>
                    Observable.of({
                        type: ActionTypes.LOG_ON_FAILED,
                        payload: e,
                        error: true
                    })
                );
        })
);

export const logonSuccessEpic = (action$: ActionsObservable<any>) => (
  action$.ofType(ActionTypes.LOG_ON_SUCCESS)
      .map(action => {
          console.log('action here in success epic = ', action);
          return push('/dash');
      })
);