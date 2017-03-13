import metaDataFixtures from '../fixtures/metadata.fixture';
import { observable } from "mobx";

class DataStore {
  @observable data = {};
  @observable loading = false;

  isLoading() {
    return this.loading;
  }

  retrieveResults() {
    return (process.env.NODE_ENV === 'test') ? metaDataFixtures : this.data;
  }
}

let store = new DataStore;

export default store;
