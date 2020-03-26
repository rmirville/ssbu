import { DataNotFoundError } from './data-not-found-error.model';
import { NotFoundError } from './not-found-error.model';

describe('DataNotFoundErrorModel', () => {
  
  it('should fail', () => {
    let nfe = new DataNotFoundError();
    expect(() => { throw nfe; }).toThrow();
  });

  it('should be a child class of NotFoundError', () => {
    let nfe = new DataNotFoundError();
    expect(nfe instanceof NotFoundError).toEqual(true);
  });

  it('should be an instance of DataNotFoundError', () => {
    let nfe = new DataNotFoundError();
    expect(nfe instanceof DataNotFoundError).toEqual(true);
  });

  it('should throw with a provided message', () => {
    let message = 'Could not find the cookbook';
    let nfe = new DataNotFoundError(message);
    expect(nfe.message).toEqual(message);
  })

});
