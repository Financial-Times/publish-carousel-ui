import React from "react";
import {observer} from "mobx-react";

/**
 * Progress bar
 * @param  {number} progressPct Percentage to display
 * @return {string}             HTML progress bar
 */
export default observer(({percentage}) => (
  <progress
    className="progress is-primary is-large"
    value={percentage}
    max="100"
  >{percentage}%</progress>
));
