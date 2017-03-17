declare module 'react-router-dom' {

    import {History} from "history";

    export interface BrowserRouterProps {
        basename?: string; // the base url for all locations
        forceRefresh?: boolean; // if true, router will do full page refreshes every time, use in old browsers
        getUserConfirmation?: (message: any, callback: (arg: any) => void) => void;
        keyLength?: number; // length of location key, defaults to 6
        history?: History;
    }
    export class BrowserRouter extends React.Component<BrowserRouterProps, void> {
    }

    export interface RouteMatch {
        url:string;
        params?: IDictionary<any>;
        path: string;
        isExact?: boolean;
    }

    export interface RouteProps {
        path?: string; // note routes without path, always match
        exact?: boolean; // exact route match
        strict?: boolean;
        component?: any; //(arg?:{match:RouteMatch}) => React.ReactNode;
        children?: any;
        routes?: any;
        render?: (...args:any[]) => React.ReactNode; // use for inline rendering
    }
    export class Route extends React.Component<RouteProps & React.ClassAttributes<Route>, void> {
    }

    export interface RouteInfo {
        history: any;
        location: {
            hash: string;
            key: string;
            pathname: string;
            search: string;
            state?: any;
        };
        match: RouteMatch;
        routes?: RouteProps[];

    }

    export interface Navigation {
        push: (path:string, state?:any) => any;
        replace: (path:string, state?:any) => any;
        goBack:() => any;
        goForward:() => any;
        location?: any;
    }

    export class Switch extends React.Component<React.ClassAttributes<Switch>, void>{}

    export interface LinkProps{
        to: {
            pathname: string;
            search?: string;
            hash?: string;
            state: any;
        } | string;

    }
    export class Link extends React.Component<LinkProps, void>{}
}