/*eslint-disable import/default */
import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { Router, browserHistory } from "react-router";
import { getRoutes } from "./routes";
import {loadHomeSuccess} from './actions/homeActions';

import injectTapEventPlugin from "react-tap-event-plugin";

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const store = configureStore();
store.dispatch(loadHomeSuccess());

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {getRoutes()}
    </Router>
  </Provider>,
  document.getElementById("app")
);
