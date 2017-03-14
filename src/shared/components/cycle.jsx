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
        <Progress percentage={cycle.metadata.progress * 100} />
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
        <div className="control has-addons">
          <Button
            type="start"
            id={cycle.id}
          >
            Start
          </Button>
          <Button
            type="stop"
            id={cycle.id}
          >
            Stop
          </Button>
          <Button
            type="reset"
            id={cycle.id}
          >
            Reset
          </Button>
        </div>
      </div>
  )
});
