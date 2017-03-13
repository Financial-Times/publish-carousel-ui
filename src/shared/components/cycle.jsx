import React from "react";
import {observer} from "mobx-react";
import Progress from './progress';

/**
 * Component showing progress bar for a single collection cycle
 * @type {Observer}
 */
export default observer(({cycle}) => {
  return (
      <div>
        <Progress pct={cycle.metadata.progress} />
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
      </div>
  )
});
