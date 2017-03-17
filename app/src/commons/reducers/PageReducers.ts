import {
    Action,
    handleActions
} from 'redux-actions';
import {
    PAGE_ACTIONS,
    pageActions
} from '../actions/PageActions';

export const pages = handleActions({
    [PAGE_ACTIONS.TOGGLE_SIDE_NAV]: (state:any, action: Action<any>) => {
        return state;
    }
},{});

export const products = handleActions({
    [PAGE_ACTIONS.TOGGLE_SIDE_NAV]: (state:any, action: Action<any>) => {
        return state;
    }
},{});