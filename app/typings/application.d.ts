
interface IDictionary <T> {
    [index:string]: T;
}

// redux action helper declaration
declare module 'redux-actions' {
    export function createActions(actions: IDictionary<any>): any;
    export interface Action <P> {
        type: any;
        payload?: P;
        error?: boolean;
    }
    export type ActionHander = (...args:any[]) =>any;
    export function createAction<P>(type:any, payloadCreator?:(...args:any[]) => P):Action<P>;
    export function handleActions(actionHandlerMap: IDictionary<ActionHander>, initialState:any):any;
}


// declared so we can properly accept hmr (hot module reload) notifications
declare var module: {
    hot: {
        accept: any;
    }
};

declare var require:any;