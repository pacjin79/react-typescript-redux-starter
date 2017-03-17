import * as React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {Provider} from "react-redux";
import DevTools from "./redux/DevTools";
import LogonComponent from "./features/logon/Logon.container";
import {Store} from "redux";
import {Route} from "react-router-dom";
import {History} from "history";
import {IApplication} from "./commons/models/Application.model";
import Dashboard from "./features/dashboard/dashboard.component";
import {ConnectedRouter} from 'connected-react-router';


const RootRoute = (history: History, store: Store<IApplication>) => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <div>
                    <div>
                        <Route exact path="/" component={LogonComponent}/>
                        <Route path="/dash" component={Dashboard}/>
                    </div>
                    <DevTools />
                </div>
            </ConnectedRouter>
        </Provider>
    )
};


export default RootRoute;