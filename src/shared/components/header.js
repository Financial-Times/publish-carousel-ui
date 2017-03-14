import React from "react";
import Headroom from "react-headroom";
import Button from "./button";
import dataStore from '../stores/dataStore';

export default () => <Headroom>
  <nav className="level">
    <div className="level-left">
      <div className="level-item">
        <h1>UPP Carousel</h1>
      </div>
    </div>

    <div className="level-right">
      <Button type="start"
        className={["level-item"]}
      >
        Start Carousel
      </Button>
      <button
        className="button is-danger label-item"
        onClick={dataStore.handleModalOpen}
      >
        Terminate Carousel
      </button>
    </div>
  </nav>
</Headroom>;
