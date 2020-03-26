/**
 * Represents an error that occurs when a required
 * value is not provided or available
 * 
 * @export
 * @class NotFoundError
 * @extends {Error}
 */
export class NotFoundError extends Error {
  constructor(message?: string) {
    super(message);

    // restore prototype chain   
    const actualProto = new.target.prototype;

    if (Object.setPrototypeOf) { Object.setPrototypeOf(this, actualProto); }
    else { this['__proto__'] = actualProto; }
  }
}
