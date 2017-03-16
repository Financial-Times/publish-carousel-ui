import { observable } from "mobx";

class DataStore {
  @observable cycles = [];
  @observable alert = null;
  @observable loading = false;
  @observable isModalOpen = false;

  isLoading() {
    return this.loading;
  }

  getAlert() {
    return this.alert;
  }

  // Should these be here?
  toggleModal() {
    return !this.isModalOpen;
  }

  handleModalOpen() {
    return this.isModalOpen = true;
  }

  handleModalCloe() {
    return this.isModalOpen = false;
  }
}

let store = new DataStore;

export default store;
