jest.unmock('../dataStore')
import dataStore from '../dataStore';

describe('Data Store', () => {
  it('Should return the initial loading state', () => {
    const isLoading = dataStore.isLoading();
    expect(isLoading).toEqual(false);
  });

  it('Should return the updated loading state', () => {
    dataStore.loading = true;
    const isLoading = dataStore.isLoading();
    expect(isLoading).toEqual(true);
  });

  it('Should return the initial data store', () => {
    const data = dataStore.retrieveResults();
    expect(data).toEqual({});
  });

  it('Should return the updated data store', () => {
    const mockData = {foo:'bar'}
    dataStore.data = mockData
    const data = dataStore.retrieveResults();
    expect(data).toEqual(mockData);
  });
});
