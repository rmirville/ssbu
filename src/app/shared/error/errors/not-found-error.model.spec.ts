import { NotFoundError } from './not-found-error.model';

describe('NotFoundErrorModel', () => {
  
  it('should fail', () => {
    let nfe = new NotFoundError();
    expect(() => { throw nfe; }).toThrow();
  });

  it('should be a child class of Error', () => {
    let nfe = new NotFoundError();
    expect(nfe instanceof Error).toEqual(true);
  });

  it('should be an instance of NotFoundError', () => {
    let nfe = new NotFoundError();
    expect(nfe instanceof NotFoundError).toEqual(true);
  });

  it('should throw with a provided message', () => {
    let message = `Could not find a new recipe`;
    let nfe = new NotFoundError(message);
    expect(nfe.message).toEqual(message);
  })

});
