import { EmptyArgumentError } from './empty-argument-error.model';

describe('EmptyArgumentErrorModel', () => {
  
  it('should fail', () => {
    let nfe = new EmptyArgumentError();
    expect(() => { throw nfe; }).toThrow();
  });

  it('should be a child class of Error', () => {
    let nfe = new EmptyArgumentError();
    expect(nfe instanceof Error).toEqual(true);
  });

  it('should be an instance of EmptyArgumentError', () => {
    let nfe = new EmptyArgumentError();
    expect(nfe instanceof EmptyArgumentError).toEqual(true);
  });

  it('should throw with a provided message', () => {
    let message = `There are no provided recipes to search for`;
    let nfe = new EmptyArgumentError(message);
    expect(nfe.message).toEqual(message);
  })

});
