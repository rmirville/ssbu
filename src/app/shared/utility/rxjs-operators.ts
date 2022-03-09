import { Observable, of, throwError } from 'rxjs';
import { concatMap, delay, retryWhen } from 'rxjs/operators';

const DEFAULT_MAX_RETRIES: number = 3;
const DEFAULT_DELAY: number = 500;

/**
 * RxJS operator that returns an Observable mirroring the
 * source Observable except on an error. On error, resubscribes
 * to the source Observable up to a provided number of times
 * with the provided delay time, exponentially backed off.
 *
 * @export
 * @param {number} maxRetries the maximum number of times to resubscribe. The default is 3.
 * @param {number} backoffDelay the change in delay to add between resubscriptions, in ms. The default is 500.
 * @returns {(src: Observable<any>) => Observable<any>}
 */
export function httpRetryBackoff(maxRetries: number = DEFAULT_MAX_RETRIES, backoffDelay: number = DEFAULT_DELAY): (src: Observable<any>) => Observable<any> {
  if (maxRetries <= 0) {
    throw new TypeError('maxRetries must be positive');
  }
  if (!Number.isInteger(maxRetries)) {
    throw new TypeError('maxRetries must be an integer');
  }
  if (backoffDelay <= 0) {
    throw new TypeError('backoffDelay must be positive');
  }
  if (!Number.isInteger(backoffDelay)) {
    throw new TypeError('backoffDelay must be an integer');
  }
  let retries: number = maxRetries;
  return (src: Observable<any>) => src.pipe(
    retryWhen((errors: Observable<any>) => {
      return errors.pipe(
        delay(backoffDelay * (maxRetries - retries + 1)),
        concatMap(error => {
          if (
            (retries-- > 0)
            && (error.status >= 500)
            && (error.status < 600)
          ) {
            return of(error);
          }
          else {
            return throwError(error);
          }
        })
      )
    })
  );
}
