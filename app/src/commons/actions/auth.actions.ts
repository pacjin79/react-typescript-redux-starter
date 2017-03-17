import {
    createAction,
    Action
} from 'redux-actions';
import {
    type
} from './utils';
import {User} from "../models/User.model";

export const ActionTypes = {
    LOG_ON: type('[User Context] Log on'),
    LOG_ON_SUCCESS: type('[User Context] Log on success'),
    LOG_ON_FAILED: type('[User Context] Log on failed')
};

export const logon = createAction(
    ActionTypes.LOG_ON
) as any;

export const logonSuccess = createAction(
    ActionTypes.LOG_ON_SUCCESS
) as any;

export const logonFailed = createAction(
    ActionTypes.LOG_ON_FAILED
) as any;