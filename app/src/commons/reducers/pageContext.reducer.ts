import {
    Action,
    handleActions
} from 'redux-actions';
import {ActionTypes} from "../actions/pageContext.action";
import {PageContext} from "../models/PageContext.model";

const initialState = new PageContext({
    sideNavOpen: false
});

function handleSideNav (state: PageContext, action:Action<boolean>){
    const newState = state.closeSideNav();
    return newState;
}
export const pageContext = handleActions({
   [ActionTypes.OPEN_SIDE_NAV]: handleSideNav
}, initialState);