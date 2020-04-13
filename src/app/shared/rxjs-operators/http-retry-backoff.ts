import { Observable, of } from 'rxjs';
import { concatMap, delay, retry, retryWhen, tap } from 'rxjs/operators';

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
  let retries: number = maxRetries;
  return (src: Observable<any>) => src.pipe(
    retryWhen((errors: Observable<any>) => {
      return errors.pipe(
        delay(backoffDelay * (maxRetries - retries + 1)),
        concatMap(error => {
          ///
          console.group('httpRetryBackoff::retryWhen::notifier::concatMap()');
          console.log(`attempts remaining: ${retries}`);
          console.log(`delayTime: ${backoffDelay * (maxRetries - retries + 1)}`);
          console.log(`error: ${JSON.stringify(error)}`);
          if (
            (retries-- > 0)
            && (error.status >= 500)
            && (error.status < 600)
          ) {
            ///
            console.log('retries-- > 0, returning of(error)');
            console.groupEnd();
            return of(error);
          }
          else {
            ///
            console.log('retries-- == 0, returning Observable.throw(error');
            console.groupEnd();
            return Observable.throw(error);
          }
        })
      )
    })
  );
}
