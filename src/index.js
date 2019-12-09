import React from "react";
import {render} from 'react-dom';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import App from "./components/app";
import reducer from "./reducers";
import Service from "./services/service";
import {ServiceProvider} from "./components/user/service-context";

const service = new Service();

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__());
store.subscribe(
    () => {console.log(store.getState())}
);

render(
    <Provider store={store}>
        <ServiceProvider value={service}>
            <Router>
                <Switch>
                    <Route path='/' exact component={() => <App admin={false}/>} />
                    <Route path='/admin' component={() => <App admin={true}/>} />
                </Switch>
            </Router>
        </ServiceProvider>
    </Provider>,
    document.getElementById('root')
);
