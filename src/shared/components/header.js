import React from "react";
import Headroom from "react-headroom";

import dataStore from '../stores/dataStore';

export default () =>
<Headroom>
  <nav className="level">
    <div className="level-left">
      <div className="level-item">
        <h1>UPP Carousel</h1>
      </div>
    </div>

    <div className="level-right">
      <button className="button is-success level-item" onClick={dataStore.handleModalOpen}>Start Carousel</button>
      <button className="button is-danger level-item space"  onClick={dataStore.handleModalOpen}>Shutdown Carousel</button>
    </div>
  </nav>
</Headroom>;
