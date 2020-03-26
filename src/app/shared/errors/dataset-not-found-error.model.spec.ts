import { DatasetNotFoundError } from './dataset-not-found-error.model';
import { NotFoundError } from './not-found-error.model';

describe('DatasetNotFoundErrorModel', () => {
  
  it('should fail', () => {
    let nfe = new DatasetNotFoundError();
    expect(() => { throw nfe; }).toThrow();
  });

  it('should be a child class of NotFoundError', () => {
    let nfe = new DatasetNotFoundError();
    expect(nfe instanceof NotFoundError).toEqual(true);
  });

  it('should be an instance of DatasetNotFoundError', () => {
    let nfe = new DatasetNotFoundError();
    expect(nfe instanceof DatasetNotFoundError).toEqual(true);
  });

  it('should throw with a provided message', () => {
    let message = 'Could not find the cookbook';
    let nfe = new DatasetNotFoundError(message);
    expect(nfe.message).toEqual(message);
  })

});
