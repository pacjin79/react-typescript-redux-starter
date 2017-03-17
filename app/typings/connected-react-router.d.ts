declare module 'connected-react-router' {

    import {History} from "history";
    import * as React from 'react';

    export interface IConnectedRouterProps {
        history: History
    }

    export class ConnectedRouter extends React.Component<IConnectedRouterProps, void>{}

    export function connectRouter(history:History): (rootReducer: any) => any;

    export function routerMiddleware(history: History): any;

    export function push(path:string): any;

}