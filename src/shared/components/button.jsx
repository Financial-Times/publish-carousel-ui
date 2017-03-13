import React from "react";
import {observer} from "mobx-react";

export default observer(({type, cycle, all, children, className = []}) => {
  className.push('button');

  switch(type) {
  case 'start':
    className.push('is-success');
    break;
  case 'stop':
    className.push('is-danger');
    break;
  case 'pause':
    className.push('is-warning');
    break;
  }
  // className.push(type.indexOf('start') > -1 ? 'button is-success' : 'button is-danger');
  return (
    <button className={className.join(' ')}>
      {children}
    </button>);
});
