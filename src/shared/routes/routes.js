import React from 'react';
import { Router, Route, IndexRoute } from "react-router";
import Help from "../handlers/help";
import Articles from "../handlers/articles";
import MetaData from "../handlers/metadata";
import AppController from "../controller/AppController";

export default (
  <Router>
    <Route path="/"
      component={AppController}
    >
      <IndexRoute component={Help} />
      <Route path="articles"
        component={Articles}
      />
      <Route path="metadata"
        component={MetaData}
      />
    </Route>
    <Route path="*"
      component={Help}
    />
  </Router>
);
