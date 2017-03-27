import React from "react";
import {observer} from "mobx-react";
import dataActions from '../actions/dataActions';

// N.b., I'm not sure whether using an array for classes is the best idea here...

export default observer(({type, id, children, status, className}) => {
  if (!className) className = ['button', 'is-small'];

  let action;
  let disabled;

  switch(type) {
  case 'start':
    disabled = status !== 'running';
    action = id ? dataActions.resumeCycle.bind(undefined, id, disabled) : dataActions.startCarousel;
    break;
  case 'stop':
    disabled = status === 'running';
    action = id ? dataActions.stopCycle.bind(undefined, id, disabled) : false;
    break;
  case 'reset':
    disabled = status === 'running';
    action = id ? dataActions.resetCycle.bind(undefined, id, disabled) : dataActions.shutdownCarousel
    break;
  }

  if (disabled) {
    className.push('is-disabled');
  }

  return (
    <button className={className.join(' ')}
      onClick={action}
    >
      {children}
    </button>);
});
