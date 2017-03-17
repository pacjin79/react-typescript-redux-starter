import {
    createAction,
    Action
} from 'redux-actions';
import {
    type
} from './utils';

export const ActionTypes = {
    OPEN_SIDE_NAV: type('[Page Context] Open side nav'),
    CLOSE_SIDE_NAV: type('[Page Context Close side nave')
};

export const openSideNav = createAction(
    ActionTypes.OPEN_SIDE_NAV
);

export const closeSideNav = createAction(
    ActionTypes.CLOSE_SIDE_NAV
);