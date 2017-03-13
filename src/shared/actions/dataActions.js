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
                if (err || !res.ok) {
                    reject(res.toError());
                } else {
                   let data = {
                       cycles: value
                   }
                   dataStore.data = data;
                   dataStore.loading = false;
                }
           });
    }
}

export default new DataActions;
