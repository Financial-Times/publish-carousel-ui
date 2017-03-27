import {action} from 'mobx';
import request from 'superagent';

import _ from 'lodash';

import dataStore from '../stores/dataStore';
import cyclesData from '../fixtures/cycles.fixture';

class DataActions {

  constructor(DEFAULT_MIN_THROTTLE = 30000) {
    this.startPolling(DEFAULT_MIN_THROTTLE);
    this.getCycles()
  }

  @action startPolling(interval) {
    this.intId = window.setInterval(this.getCycles, interval);
  }

  @action stopPolling() {
    window.cancelInterval(this.intId);
  }

  @action getCycles() {
    dataStore.loading = true;

    if(process.env.NODE_ENV === 'test') {
      dataStore.cycles.clear();
      cyclesData.map((cycle) => {
        dataStore.cycles.push(cycle);
      })
      return
    }

    request
      .get(`cycles`)
      .end(function(err, res) {
        dataStore.loading = false;
        if (err || !res.ok) {
          dataStore.alert = 'Failed to retrieve cycles from the carousel!';
        } else {
          dataStore.cycles.clear();
          _.sortBy(res.body, ['name']).map((cycle) => {
            dataStore.cycles.push(cycle);
          });
        }
      });
  }

  @action.bound stopCycle(id, isDisabled = true) {
    if (isDisabled) return;

    let get = this.getCycles
    request
    .post(`cycles/${id}/stop`)
    .end(function(err, res) {
      if (err || !res.ok) {
        dataStore.alert = 'Failed to stop cycle! Please check if the carousel is running, and try again.';
      } else {
        get()
      }
    });
  }

  @action.bound resetCycle(id, isDisabled = true) {
    if (isDisabled) return;

    let get = this.getCycles
    request
    .post(`cycles/${id}/reset`)
    .end(function(err, res) {
      if (err || !res.ok) {
        dataStore.alert = 'Failed to reset cycle! Please check if the carousel is running, and try again.';
      } else {
        get()
      }
    });
  }

  @action.bound resumeCycle(id, isDisabled = true) {
    if (isDisabled) return;

    let get = this.getCycles
    request
    .post(`cycles/${id}/resume`)
    .end(function(err, res) {
      if (err || !res.ok) {
        dataStore.alert = 'Failed to resume cycle! Please check if the carousel is running, and try again.';
      } else {
        get()
      }
    });
  }

  @action.bound shutdownCarousel() {
    let get = this.getCycles

    request
    .post(`scheduler/shutdown`)
    .end(function(err, res) {
      if (err || !res.ok) {
        dataStore.alert = 'Failed to shutdown carousel! Please check if the carousel is running, and try again.';
      } else {
        get()
      }
    });
  }

  @action.bound startCarousel() {
    let get = this.getCycles

    request
    .post(`scheduler/start`)
    .end(function(err, res) {
      if (err || !res.ok) {
        dataStore.alert = 'Failed to start carousel! Please check if the carousel is running, and try again.';
      } else {
        get()
      }
    });
  }
}

export default new DataActions;
