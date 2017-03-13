import { action } from 'mobx';
import dataStore from '../stores/dataStore';
import request from 'superagent';

class DataActions {
  constructor(){
  }

  @action populateMetaData() {
    dataStore.loading = true;

    let a = this.callAPI('24h', '28d');
    let b = this.callAPI('1h', '1d');
    return Promise.all([a, b]).then(values => {
      let data = {
        month: values[0],
        day: values[1]
      }
      dataStore.data = data;
      dataStore.loading = false;
    })
  }

  callAPI (interval, timespan) {
    const CAROUSEL_API_URL = process.env.CAROUSEL_API_URL;

    return new Promise((resolve, reject) => {
      request
         .get(`${CAROUSEL_API_URL}?timespan=${timespan}&interval=${interval}`)
         .end(function(err, res){
           if (err || !res.ok) {
             reject(res.toError());
           } else {
             resolve(res.body);
           }
      });
    })
  }
}

export default new DataActions;
