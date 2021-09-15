import { makeObservable, observable, action } from 'mobx';

export function dataStore() {
  return makeObservable({
    isLoading: false,
    isError: false,
    data: [],
    setIsLoading(value) {
      this.isLoading = value;
    },
    setIsError(value) {
      this.isError = value;
    },
    setData(value) {
      this.data = {...value};
    },
  }, {
    isLoading: observable,
    isError: observable,
    data: observable,
    setIsLoading: action,
    setIsError: action,
    setData: action,
  });
}