import React from "react";
import {observer} from "mobx-react";
import dataActions from '../actions/dataActions';

// N.b., I'm not sure whether using an array for classes is the best idea here...

export default observer(({type, id, children, states, className}) => {
  if (!className) className = ['button', 'is-small'];

  let action;
  let disabled;

  if (!states) states = []

  let checkRunning = (states) => {
    return states.indexOf('running') > -1 || states.indexOf('cooldown') > -1 && states.length === 1;
  }

  let checkStopped = (states) => {
    return states.indexOf('stopped') > -1;
  }

  switch(type) {
  case 'start':
    disabled = !checkStopped(states);
    action = id ? dataActions.resumeCycle.bind(undefined, id, disabled) : dataActions.startCarousel;
    break;
  case 'stop':
    disabled = !checkRunning(states);
    action = id ? dataActions.stopCycle.bind(undefined, id, disabled) : false;
    break;
  case 'reset':
    disabled = !checkRunning(states);
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
