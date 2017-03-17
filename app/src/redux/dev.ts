import {createStore, applyMiddleware, compose} from "redux";
import {reducers} from "../commons/reducers";
import DevTools from "./DevTools";
import {Store} from "react-redux";
import {
    routerMiddleware,
    connectRouter
} from 'connected-react-router';
import {
    History
} from 'history';
import * as ReduxObservable from 'redux-observable';
import {rootEpic} from "../commons/epics/index";

export namespace ReduxConfigDev {
    export function configureStore(history:History): Store<any> {
        const routerMiddleWare = routerMiddleware(history);
        const epicMiddleware = ReduxObservable.createEpicMiddleware(rootEpic);
        const store = createStore(
            connectRouter(history)(reducers),
            compose(applyMiddleware(
                routerMiddleWare,
                epicMiddleware
            ), DevTools.instrument())
        );
        return store;
    }
}

