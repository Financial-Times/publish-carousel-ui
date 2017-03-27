import React from "react";
import _ from 'lodash';
import {observer} from 'mobx-react';

import dataStore from '../stores/dataStore';

import Header from '../components/header';
import Button from '../components/button';
import Collection from '../components/collection';

@observer
export default class Carousel extends React.Component {

  render() {
    const cycles = _.groupBy(this.props.cycles, 'collection');
    const collections = _.keys(cycles);

    return (
        <main>
          <Header title="" />

          <div className="content">
            {collections.map(collection =>
                  <div className="collection card" key={collection}>
                        <header className="card-header">
                           <p className="card-header-title">
                              {collection.toUpperCase()}
                           </p>
                        </header>
                        <div className="card-content">
                           <div className="content">
                              <Collection cycles={cycles[collection]} />
                           </div>
                        </div>
                     </div>
            )}
          </div>

          <div className={"modal " + (dataStore.isModalOpen ? 'is-active' : '')}>
            <div className="modal-background" />
            <div className="modal-content">
              Are you <strong>SURE</strong> you want to do this? <br />
              <Button type="reset"
                className={["is-large"]}
              >
                YES I AM TOTALLY AWARE OF WHAT I AM DOING
              </Button>
            </div>
            <button className="modal-close"
              onClick={dataStore.handleModalClose}
            />
         </div>
        </main>)
  }
}
