/**
 * Represents an error that occurs when a function
 * argument is blank or has no required values
 * 
 * @export
 * @class EmptyArgumentError
 * @extends {Error}
 */
export class EmptyArgumentError extends Error {
  constructor(message?: string) {
    super(message);

    // restore prototype chain   
    const actualProto = new.target.prototype;

    if (Object.setPrototypeOf) { Object.setPrototypeOf(this, actualProto); }
    else { this['__proto__'] = actualProto; }
  }
}
