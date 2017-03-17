import * as reduxObservable from 'redux-observable';

import {
    logonEpic,
    logonSuccessEpic
} from './auth.epics';

export const rootEpic = reduxObservable.combineEpics<any, any>(
    logonEpic,
    logonSuccessEpic
);