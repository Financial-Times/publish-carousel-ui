import React from "react";
import ReactDOM from "react-dom";
import store from '../shared/stores/dataStore';
import '../shared/actions/dataActions'; // Instantiate the actions and start polling
import Carousel from '../shared/handlers/carousel';
import { Provider } from 'mobx-react';

// import styles
import "./styles/main.scss";

ReactDOM.render(
  <Provider store={store}>
    <Carousel cycles={store.cycles}/>
  </Provider>,
  document.getElementById('app')
);
