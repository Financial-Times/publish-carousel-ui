import React from "react";

import _ from 'lodash';

import {observer} from 'mobx-react';

import dataActions from '../actions/dataActions';
import dataStore from '../stores/dataStore';

import Header from '../components/header';
import Collection from '../components/collection';
import Button from '../components/button';

@observer
export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cycles: []
    }
  }

  componentWillMount() {
    dataActions.getCycles()
  }

  componentDidMount() {

  }

  componentWillUnmount() {
  }

  render() {
    if(dataStore.isLoading()){
      return <Header />
    }

    const cycles = _.groupBy(dataStore.getCycles(), 'collection')
    const collections = _.keys(cycles)

    return (
        <main>
          <Header title="" />
          <div className="content">
            {collections.map(collection =>
              <div
                className="card"
                key={collection}
              >
                <header className="card-header">
                  <p className="card-header-title">
                    {collection}
                  </p>
                </header>
                <div className="card-content">
                  <div className="content">
                    <Collection cycles={cycles[collection]} />
                  </div>
                </div>
                <footer className="card-footer">
                  <Button
                    className={["card-footer-item"]}
                    type="pause"
                    cycle={cycles[collection]}
                    all
                  >
                    Pause all&nbsp;{collection}
                  </Button>
                  <Button
                    className={["card-footer-item"]}
                    type="stop"
                    cycle={cycles[collection]}
                    all
                  >
                    Stop all&nbsp;{collection}
                  </Button>
                </footer>
              </div>
            )}
          </div>
        </main>)
  }
}
