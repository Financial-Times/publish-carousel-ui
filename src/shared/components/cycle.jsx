import React from "react";
import {observer} from "mobx-react";
import Progress from './progress';
import Button from './button';
/**
 * Component showing progress bar for a single collection cycle
 * @type {Observer}
 */
export default observer(({cycle}) => {
  return (
      <div className="cycle">
        <Progress pct={cycle.metadata.progress * 100} />
        <details>
          <summary>Metadata</summary>
          <ul>
            <li>Errors: {cycle.metadata.errors}</li>
            <li>Completed: {cycle.metadata.completed}</li>
            <li>Total: {cycle.metadata.total}</li>
            <li>Iteration: {cycle.metadata.iteration}</li>
            <li>Current UUID: {cycle.metadata.currentUuid}</li>
            <li>Type: {cycle.type}</li>
          </ul>
        </details>
        <div className="button-container control is-grouped">
          <p className="control">
            <Button
              type="pause"
              cycle={cycle}
            >
              Pause&nbsp;{cycle.name}
            </Button>
          </p>
          <p className="control">
            <Button
              type="stop"
              cycle={cycle}
            >
              Stop&nbsp;{cycle.name}
            </Button>
          </p>
        </div>
      </div>
  )
});
