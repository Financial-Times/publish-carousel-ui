import {action} from 'mobx';
import request from 'superagent';
import duration from 'parse-duration';

import dataStore from '../stores/dataStore';
import cyclesData from '../fixtures/cycles.fixture';

class DataActions {

  constructor(DEFAULT_MIN_THROTTLE = 30000) {
    request
       .get(`cycles`)
       .end((err, res) => {
         if (err || !res.ok){
           this.startPolling(DEFAULT_MIN_THROTTLE);
           this.getCycles()
         }

         if (res.body) {
           const interval = Math.max(...res.body.map(item => duration(item.maximumThrottle) || DEFAULT_MIN_THROTTLE));
           this.startPolling(interval);
         }
       });
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
        console.log(res.body);

        if (err || !res.ok) {
          dataStore.alert = 'Failed to retrieve cycles from the carousel!';
        } else {
          dataStore.cycles.clear();
          res.body.map((cycle) => {
             dataStore.cycles.push(cycle);
          })
        }
      });
  }

  @action stopCycle(id, isDisabled = true) {
    if (isDisabled) return;
    request
    .post(`cycles/${id}/stop`)
    .end(function(err, res) {
      if (err || !res.ok) {
        dataStore.alert = 'Failed to stop cycle! Please check if the carousel is running, and try again.';
      }
    });
  }

  @action resetCycle(id, isDisabled = true) {
    if (isDisabled) return;
    request
    .post(`cycles/${id}/reset`)
    .end(function(err, res) {
      if (err || !res.ok) {
        dataStore.alert = 'Failed to reset cycle! Please check if the carousel is running, and try again.';
      }
    });
  }

  @action resumeCycle(id, isDisabled = true) {
    if (isDisabled) return;
    request
    .post(`cycles/${id}/resume`)
    .end(function(err, res) {
      if (err || !res.ok) {
        dataStore.alert = 'Failed to resume cycle! Please check if the carousel is running, and try again.';
      }
    });
  }

  @action shutdownCarousel() {
    request
    .post(`scheduler/shutdown`)
    .end(function(err, res) {
      if (err || !res.ok) {
        dataStore.alert = 'Failed to shutdown carousel! Please check if the carousel is running, and try again.';
      }
    });
  }

  @action startCarousel() {
    request
    .post(`scheduler/start`)
    .end(function(err, res) {
      if (err || !res.ok) {
        dataStore.alert = 'Failed to start carousel! Please check if the carousel is running, and try again.';
      }
    });
  }
}

export default new DataActions;
