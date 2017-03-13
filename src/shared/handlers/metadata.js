import React from "react";
import moment from "moment";
import {observer} from 'mobx-react';
import {observable} from "mobx";

import dataActions from '../actions/dataActions';
import dataStore from '../stores/dataStore';

import Header from '../components/header';

@observer
export default class Metadata extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentWillMount() {
      dataActions.populateMetaData();
    }

    componentDidMount() {

    }

    componentWillUnmount() {
    }

    filterData(id, data) {
      
    }

    render() {
      if(dataStore.isLoading()){
        return <Header />
      }


      return (
        <div>
          <Header title="Articles published with an Author, Primary Theme, Section or All three in the last 24 hours" />
        </div>
      )
    }
}
