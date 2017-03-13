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
          metrics: [
            'existsAllCount',
            'existsAuthorCount',
            'existsPrimaryThemeCount',
            'existsSectionCount'
          ],
          highlight: 'existsAllCount',
          highlightNumber: 0
        }
    }

    componentWillMount() {
      dataActions.populateMetaData();
    }

    componentDidMount() {
      const { metrics } = this.state;
      let highlighted = 1;
      this.setStateInterval = window.setInterval(() => {
        this.setState({
          highlight: metrics[highlighted],
          highlightNumber: highlighted
        });
        if(highlighted < metrics.length-1) {
          highlighted++;
        } else {
          highlighted = 0;
        }
      }, 5000);
    }

    componentWillUnmount() {
      window.clearInterval(this.setStateInterval);
    }

    filterData(id, data) {
      return data.histogram.map((d) => {
        return {
          x : moment(d.timestamp).format('h:mm DD/MM/YYYY'),
          y : d[id] || 0
        }
      });
    }

    render() {

      if(dataStore.isLoading()){
        return <Header />
      }

      const { highlight } = this.state;
      const data = dataStore.retrieveResults();

      const metrics = [
        {
          value: data.day.totals.existsAllCount,
          name: 'All',
          highlight: highlight === 'existsAllCount' ? true : false,
          histogram: this.filterData('existsAllCount', data.day),
          total: data.day.totals.totalPublishCount
        },
        {
          value: data.day.totals.existsAuthorCount,
          name: 'Author',
          highlight: highlight === 'existsAuthorCount' ? true : false,
          histogram: this.filterData('existsAuthorCount', data.day),
          total: data.day.totals.totalPublishCount
        },
        {
          value: data.day.totals.existsPrimaryThemeCount,
          name: 'Primary Theme',
          highlight: highlight === 'existsPrimaryThemeCount' ? true : false,
          histogram: this.filterData('existsPrimaryThemeCount', data.day),
          total: data.day.totals.totalPublishCount
        },
        {
          value: data.day.totals.existsSectionCount,
          name: 'Section',
          highlight: highlight === 'existsSectionCount' ? true : false,
          histogram: this.filterData('existsSectionCount', data.day),
          total: data.day.totals.totalPublishCount
        }
      ];

      const histogram = observable(data.month.histogram).map((d) => {
        return {
          x : moment(d.timestamp).format('HH:mm DD/MM/YYYY'),
          y : d[highlight] || 0,
          timestamp : d.timestamp
        }
      });

      return (
        <div>
          <Header title="Articles published with an Author, Primary Theme, Section or All three in the last 24 hours" />
        </div>
      )
    }
}
