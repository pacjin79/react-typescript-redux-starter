import * as React from 'react';
import {Store} from "redux";
import {IApplication} from "../models/Application.model";

export function ExposeStore (target: any) {
    target.contextTypes = target.contextTypes || {};
    target.contextTypes.store = React.PropTypes.object.isRequired;
}

export interface IStoreContext {
    store: Store<IApplication>;
}