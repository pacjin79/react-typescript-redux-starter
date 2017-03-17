import {combineReducers, Action} from 'redux';
import {
    pageContext
} from './pageContext.reducer';
import {userContext} from "./userContext.reducer";
import {
    reducer as formReducer
} from 'redux-form';

export const reducers = combineReducers({
    pageContext,
    userContext,
    form: formReducer
});

