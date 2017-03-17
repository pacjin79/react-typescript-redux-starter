import {createActions} from "redux-actions";

export const PAGE_ACTIONS = {
    TOGGLE_SIDE_NAV: "TOGGLE_SIDE_NAV"
};

export const pageActions = createActions({
    [PAGE_ACTIONS.TOGGLE_SIDE_NAV]: (pageId:string) => pageId
});
