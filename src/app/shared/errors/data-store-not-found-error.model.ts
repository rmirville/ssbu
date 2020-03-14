import { NotFoundError } from './not-found-error.model';
/**
 * Represents an error that occurs when a required
 * data store is not provided
 *
 * @export
 * @class DataStoreNotFoundError
 * @extends {NotFoundError}
 */
export class DataStoreNotFoundError extends NotFoundError {
  constructor(message?: string) {
    super(message);

    // restore prototype chain   
    const actualProto = new.target.prototype;

    if (Object.setPrototypeOf) { Object.setPrototypeOf(this, actualProto); }
    else { this['__proto__'] = actualProto; }
  }
}
