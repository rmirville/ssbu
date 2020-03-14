import { DataStoreNotFoundError } from './data-store-not-found-error.model';
import { NotFoundError } from './not-found-error.model';

describe('DataStoreNotFoundErrorModel', () => {
  
  it('should fail', () => {
    let nfe = new DataStoreNotFoundError();
    expect(() => { throw nfe; }).toThrow();
  });

  it('should be a child class of NotFoundError', () => {
    let nfe = new DataStoreNotFoundError();
    expect(nfe instanceof NotFoundError).toEqual(true);
  });

  it('should be an instance of DataStoreNotFoundError', () => {
    let nfe = new DataStoreNotFoundError();
    expect(nfe instanceof DataStoreNotFoundError).toEqual(true);
  });

  it('should throw with a provided message', () => {
    let message = 'Could not find the cookbook';
    let nfe = new DataStoreNotFoundError(message);
    expect(nfe.message).toEqual(message);
  })

});
