import {action} from 'mobx';
import dataStore from '../stores/dataStore';
import request from 'superagent';

const CAROUSEL_API_URL = process.env.CAROUSEL_API_URL;

class DataActions {
   constructor() {}

   @action getCycles() {
      dataStore.loading = true;

      request
         .get(`${CAROUSEL_API_URL}/cycles`)
         .end(function(err, res) {
            dataStore.loading = false;
            if (err || !res.ok) {
               dataStore.data = {
                  alert: 'Failed to retrieve cycles from the carousel!'
               }
            } else {
               dataStore.data = {
                  cycles: res.body
               };
            }
         });
   }

      @action stopCycle(id) {
         request
         .post(`${CAROUSEL_API_URL}/cycles/${id}/stop`)
         .end(function(err, res) {
            if (err || !res.ok) {
               dataStore.data = {
                  alert: 'Failed to stop cycle! Please check if the carousel is running, and try again.'
               }
            }
         });
      }

      @action resetCycle(id) {
         request
         .post(`${CAROUSEL_API_URL}/cycles/${id}/reset`)
         .end(function(err, res) {
            if (err || !res.ok) {
               dataStore.data = {
                  alert: 'Failed to reset cycle! Please check if the carousel is running, and try again.'
               }
            }
         });
      }

      @action resumeCycle(id) {
         request
         .post(`${CAROUSEL_API_URL}/cycles/${id}/resume`)
         .end(function(err, res) {
            if (err || !res.ok) {
               dataStore.data = {
                  alert: 'Failed to resume cycle! Please check if the carousel is running, and try again.'
               }
            }
         });
      }

      @action shutdownCarousel() {
         request
         .post(`${CAROUSEL_API_URL}/scheduler/shutdown`)
         .end(function(err, res) {
            if (err || !res.ok) {
               dataStore.data = {
                  alert: 'Failed to shutdown carousel! Please check if the carousel is running, and try again.'
               }
            }
         });
      }

      @action startCarousel() {
         request
         .post(`${CAROUSEL_API_URL}/scheduler/start`)
         .end(function(err, res) {
            if (err || !res.ok) {
               dataStore.data = {
                  alert: 'Failed to start carousel! Please check if the carousel is running, and try again.'
               }
            }
         });
      }
}

export default new DataActions;
