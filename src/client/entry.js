import React from "react";
import ReactDOM from "react-dom";
import store from '../shared/stores/dataStore';
import Carousel from './handlers/carousel';
import { Provider } from 'mobx-react';

// import styles
import "./styles/main.scss";

ReactDOM.render(
  <Provider store={store}>
    <Carousel />
  </Provider>,
  document.getElementById('app')
);
