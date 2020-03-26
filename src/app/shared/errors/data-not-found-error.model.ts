import { NotFoundError } from './not-found-error.model';
/**
 * Represents an error that occurs when required
 * data points are not available
 *
 * @export
 * @class DataNotFoundError
 * @extends {NotFoundError}
 */
export class DataNotFoundError extends NotFoundError {
  constructor(message?: string) {
    super(message);

    // restore prototype chain   
    const actualProto = new.target.prototype;

    if (Object.setPrototypeOf) { Object.setPrototypeOf(this, actualProto); }
    else { this['__proto__'] = actualProto; }
  }
}
