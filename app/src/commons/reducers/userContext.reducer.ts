import {
    Action,
    handleActions
} from 'redux-actions';

import {UserContext} from '../models/UserContext.model';
import {User} from "../models/User.model";
import {ActionTypes} from "../actions/auth.actions";

const initialState = new UserContext({
    user_id: null,
    isAuthenticated: false,
    authError: null
});

function handleLogonSuccess(state: UserContext, action:Action<User>) {
    const user = action.payload;
    const newState = new UserContext({
        user_id: user.id,
        isAuthenticated: true
    });
    return newState;
}

function handleLogonFailed(userContext: UserContext, action:Action<any>) {
   return userContext.setAuthError(action.payload);
}

export const userContext = handleActions({
    [ActionTypes.LOG_ON_SUCCESS]: handleLogonSuccess,
    [ActionTypes.LOG_ON_FAILED]: handleLogonFailed
}, initialState);