import {action} from 'mobx';
import dataStore from '../stores/dataStore';
import request from 'superagent';

class DataActions {
   constructor() {}

   @action getCycles() {
     dataStore.loading = true;

     request
         .get(`/cycles`)
         .end(function(err, res) {
           dataStore.loading = false;
           if (err || !res.ok) {
             dataStore.alert = 'Failed to retrieve cycles from the carousel!';
           } else {
             dataStore.cycles = res.body;
           }
         });
   }

   @action stopCycle(id) {
     request
      .post(`/cycles/${id}/stop`)
      .end(function(err, res) {
        if (err || !res.ok) {
          dataStore.alert = 'Failed to stop cycle! Please check if the carousel is running, and try again.';
        }
      });
   }

   @action resetCycle(id) {
     request
      .post(`/cycles/${id}/reset`)
      .end(function(err, res) {
        if (err || !res.ok) {
          dataStore.alert = 'Failed to reset cycle! Please check if the carousel is running, and try again.';
        }
      });
   }

   @action resumeCycle(id) {
     request
      .post(`/cycles/${id}/resume`)
      .end(function(err, res) {
        if (err || !res.ok) {
          dataStore.alert = 'Failed to resume cycle! Please check if the carousel is running, and try again.';
        }
      });
   }

   @action shutdownCarousel() {
     request
      .post(`/scheduler/shutdown`)
      .end(function(err, res) {
        if (err || !res.ok) {
          dataStore.alert = 'Failed to shutdown carousel! Please check if the carousel is running, and try again.';
        }
      });
   }

   @action startCarousel() {
     request
      .post(`/scheduler/start`)
      .end(function(err, res) {
        if (err || !res.ok) {
          dataStore.alert = 'Failed to start carousel! Please check if the carousel is running, and try again.';
        }
      });
   }
}

export default new DataActions;
