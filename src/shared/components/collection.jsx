import React from "react";
import {observer} from "mobx-react";
import Cycle from './cycle';

export default observer(({cycles}) => (
  <div className="columns is-multiline">
    {cycles.map(item =>
      <div
        className="column is-one-half"
        key={item.id}
      >
        <Cycle cycle={item} />
      </div>)}
  </div>));
