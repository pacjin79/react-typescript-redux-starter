import * as React from "react";
import * as ReactDOM from "react-dom";
import {ApplicationConfig} from "./config";
import "./styles";
import {AppContainer} from "react-hot-loader";
import Application from "./Application";

import {createBrowserHistory} from 'history/';

const history = createBrowserHistory();
const store = ApplicationConfig.configReduxDev(history);
const render = (Component: any) => {
    // console.log('hot reload called component = ', Component);
    ReactDOM.render(
        <AppContainer>
            {Component(history, store)}
        </AppContainer>,
        document.getElementById("bootstrapContainer")
    );
};
render(Application);

// enable react hot module replacement with the code snippet try this too
if (module.hot) {
    module.hot.accept('./Application', () => render(require('./Application').default));
    module.hot.accept('./commons/reducers', () => {
        const nextReducers = require('./commons/reducers/index').reducers;
        store.replaceReducer(nextReducers);
    });
}