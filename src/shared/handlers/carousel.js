import React from "react";

import _ from 'lodash';

import {observer} from 'mobx-react';

import dataActions from '../actions/dataActions';
import dataStore from '../stores/dataStore';

import Header from '../components/header';
import Collection from '../components/collection';

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
               <div key={collection}>
                  <h1>{collection}</h1>
                  <Collection cycles={cycles[collection]} />
               </div>
            )}
          </div>
        </main>
    )
  }
}
