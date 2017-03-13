import React from "react";
import ReactDOM from "react-dom";
import { Router, browserHistory } from "react-router";
import routes from '../shared/routes/routes'
import store from '../shared/stores/dataStore'
import { Provider } from 'mobx-react';

// import styles
import "./styles/main.scss";

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes}
      history={browserHistory}
    />
  </Provider>,
  document.getElementById('app')
);
