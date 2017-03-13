import React from "react";
import {observer} from "mobx-react";
import Progress from './progress';

/**
 * Component showing progress bar for a single collection cycle
 * @type {Observer}
 */
export default observer(({cycle}) => (<div>
  <Progress pct={cycle.percentage} />
  <details>
    ...cycle details here...
  </details>
</div>));
