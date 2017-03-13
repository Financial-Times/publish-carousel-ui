import cyclesData from '../fixtures/cycles.fixture';
import { observable } from "mobx";

class DataStore {
  @observable cycles = [];
  @observable alert = null;
  @observable loading = false;

  isLoading() {
    return this.loading;
  }

  getAlert() {
    return this.alert;
  }

  getCycles() {
    return (process.env.NODE_ENV === 'test') ? cyclesData : this.cycles;
  }
}

let store = new DataStore;

export default store;
