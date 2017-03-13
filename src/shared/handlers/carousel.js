import React from "react";
import moment from "moment";
import {observer} from 'mobx-react';
import {observable} from "mobx";

import dataActions from '../actions/dataActions';
import dataStore from '../stores/dataStore';

import Header from '../components/header';
import Collection from '../components/collection';

@observer
export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentWillMount() {
    dataActions.getCycles();
  }

  componentDidMount() {

  }

  componentWillUnmount() {
  }

  render() {
    if(dataStore.isLoading()){
      return <Header />
    }

    return (
        <main>
          <Header title="" />
          <div className="content">
            {/* {dataStore.collections.forEach(coll => <Collection collection={coll} />)} */}
          </div>
        </main>
    )
  }
}