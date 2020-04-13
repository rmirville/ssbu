import { Observable } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { asyncData } from '../../testing/async-observable-helpers';
import 'zone.js/dist/zone';

import { httpRetryBackoff } from './http-retry-backoff';

describe('httpRetryBackoff()', () => {
  let httpSpy: {get: jasmine.Spy};
  let scheduler: TestScheduler;
  
  beforeEach(() => {
    httpSpy = jasmine.createSpyObj('HttpClient', ['get']);
    scheduler = new TestScheduler( (actual, expected) => { expect(actual).toEqual(expected); } );
  });

  describe('default behavior', () => {

    it('should pass along a successful request', (done: DoneFn) => {
      ///
      // console.groupCollapsed('=== SPEC - pass along successful request');
      const inputUrl: string = '/pHlBoFs/Ths';
      const expectedOutput: string = '9p57m7wQPj';

      httpSpy.get.and.returnValue(asyncData(expectedOutput));

      const response$: Observable<string> = httpSpy.get(inputUrl).pipe(httpRetryBackoff());

      response$.subscribe({
        next: actualOutput => {
          expect(actualOutput).toEqual(expectedOutput);
          ///
          // console.groupEnd();
          done();
        }
      });
    });

    it('should not retry on a first successful request', (done: DoneFn) => {
      ///
      // console.groupCollapsed('=== SPEC - don\'t retry on first success');
      const inputUrl: string = '/dKz/TYk4xa7';
      const output: string = 'V1fox46EOH';
      const unusedOutput: string = '3GQUp5hEgM';

      httpSpy.get.and.returnValues(asyncData(output), asyncData(unusedOutput));

      const response$: Observable<string> = httpSpy.get(inputUrl).pipe(httpRetryBackoff());

      response$.subscribe({
        next: () => {
          expect(httpSpy.get).toHaveBeenCalledTimes(1);
          ///
          // console.groupEnd();
          done();
        }
      });
    });

    it('should not retry on a non-500 error', (done: DoneFn) => {
      ///
      // console.groupCollapsed('=== SPEC - don\'t retry on non-500 error');
      const inputUrl: string = '/cbbo/fQZWa1XTswP2Of';
      const expectedTries: number = 1;
      let actualTries: number = 0;

      httpSpy.get.and.callFake(() => {
        return Observable.create((observer) => {
          actualTries++;
          observer.error({ status: 400 })
        });
      });

      const response$: Observable<string> = httpSpy.get(inputUrl).pipe(httpRetryBackoff());
      response$.subscribe({
        next: () => {
          fail('The request should return an error');
          ///
          // console.groupEnd();
          done();
        },
        error: () => {
          expect(actualTries).toEqual(expectedTries);
          ///
          // console.groupEnd();
          done();
        },
        complete: () => {
          fail('The request should return an error');
          ///
          // console.groupEnd();
          done();
        }
      });
    });

    it('should delay the first retry by 500ms by default', (done: DoneFn) => {
      ///
      // console.groupCollapsed('=== SPEC - delay first retry');
      const inputUrl: string = '/wRfE0DtQOH/UuTf6';
      const expectedData: string = 'BEOi7duAtN';
      let tries: number = 0;

      httpSpy.get.and.callFake(() => {
        return Observable.create((observer) => {
          ///
          // console.group('SPEC - response$');
          tries++;
          ///
          // console.log(`attempt #${tries}`);
          if (tries < 2) {
            ///
            // console.log('SPEC - throwing error');
            // console.groupEnd();
            observer.error({ status: 503 });
          }
          else {
            ///
            // console.log('SPEC - returning data');
            // console.groupEnd();
            observer.next(expectedData);
          }
        });
      });

      scheduler.run(({ expectObservable }) => {
        const expectedMarble: string = '500ms d';
        const expectedValues: { [value: string]: any } = { d: expectedData };
        const data$: Observable<string> = httpSpy.get(inputUrl).pipe(httpRetryBackoff());
        expectObservable(data$).toBe(expectedMarble, expectedValues);
        ///
        // console.groupEnd();
        done();
      });
    });

    it('should delay the second retry by 1000ms by default', (done: DoneFn) => {
      ///
      // console.groupCollapsed('=== SPEC - delay second retry');
      const inputUrl: string = '/cR/yW19';
      const expectedData: string = 'Xwafu0h';
      let tries: number = 0;

      httpSpy.get.and.callFake(() => {
        return Observable.create((observer) => {
          ///
          // console.group('SPEC - response$');
          tries++;
          ///
          // console.log(`attempt #${tries}`);
          if (tries < 3) {
            ///
            // console.log('SPEC - throwing error');
            // console.groupEnd();
            observer.error({ status: 570 });
          }
          else {
            ///
            // console.log('SPEC - returning data');
            // console.groupEnd();
            observer.next(expectedData);
          }
        });
      });

      scheduler.run(({ expectObservable }) => {
        const expectedMarble: string = '1000ms d';
        const expectedValues: { [value: string]: any } = { d: expectedData };
        const data$: Observable<string> = httpSpy.get(inputUrl).pipe(httpRetryBackoff());
        expectObservable(data$).toBe(expectedMarble, expectedValues);
        ///
        // console.groupEnd();
        done();
      });

    });

    it('should delay the third retry by 1500ms by default', (done: DoneFn) => {
      ///
      // console.groupCollapsed('=== SPEC - delay third retry');
      const inputUrl: string = '/06p0bXo/JuiXBv';
      const expectedData: string = 'Sg1yhOWiP';
      let tries: number = 0;

      httpSpy.get.and.callFake(() => {
        return Observable.create((observer) => {
          ///
          // console.group('SPEC - response$');
          tries++;
          ///
          // console.log(`attempt #${tries}`);
          if (tries < 4) {
            ///
            // console.log('SPEC - throwing error');
            // console.groupEnd();
            observer.error({ status: 508 });
          }
          else {
            ///
            // console.log('SPEC - returning data');
            // console.groupEnd();
            observer.next(expectedData);
          }
        });
      });

      scheduler.run(({ expectObservable }) => {
        const expectedMarble: string = '1500ms d';
        const expectedValues: { [value: string]: any } = { d: expectedData };
        const data$: Observable<string> = httpSpy.get(inputUrl).pipe(httpRetryBackoff());
        expectObservable(data$).toBe(expectedMarble, expectedValues);
        ///
        // console.groupEnd();
        done();
      });

    });

    it('should retry at most 3 times by default', (done: DoneFn) => {
      ///
      // console.groupCollapsed('=== SPEC - retry 3 times by default');
      const inputUrl: string = '/LD5mBra/9k9';
      const expectedTries: number = 4;
      let actualTries: number = 0;

      httpSpy.get.and.callFake(() => {
        ///
        // console.log('SPEC - httpSpy.get called');
        return Observable.create(observer => {
          ///
          // console.group('SPEC - response$ called');
          // console.log('SPEC - emitting error');
          actualTries++;
          // console.log(`SPEC - actualTries: ${actualTries}`);
          observer.error({ status: 554 });
          ///
          // console.groupEnd();
        });
      });

      const response$: Observable<string> = httpSpy.get(inputUrl).pipe(httpRetryBackoff());
      response$.subscribe({
        next: () => {
          ///
          // console.log('SPEC - response$ received next');
          fail('The Observable should throw an error');
          ///
          // console.groupEnd();
          done();
        },
        error: () => {
          ///
          // console.log('SPEC - response$ received error');
          expect(actualTries).toEqual(expectedTries);
          ///
          // console.groupEnd();
          done();
        },
        complete: () => {
          ///
          // console.log('SPEC - response$ received complete');
          fail('The Observable should throw an error');
          ///
          // console.groupEnd();
          done();
        }
      });
    });

  });

  describe('parameters', () => {

    it('should retry the subscription the number of times provided max', (done: DoneFn) => {
      ///
      // console.groupCollapsed('=== SPEC - retry provided number of times max');
      const inputUrl: string = '/liRL';
      const inputMaxRetries: number = 7;
      const expectedTries: number = 8;
      let actualTries: number = 0;

      httpSpy.get.and.callFake(() => {
        return Observable.create(observer => {
          ///
          // console.group('SPEC - httpSpy.get Observable');
          // console.log('SPEC - emitting error');
          actualTries++;
          observer.error({ status: 500 });
          ///
          // console.groupEnd();
        });
      });

      const response$: Observable<string> = httpSpy.get(inputUrl).pipe(httpRetryBackoff(inputMaxRetries));

      response$.subscribe({
        next: () => {
          fail('The Observable should throw an error');
          ///
          // console.groupEnd();
          done();
        },
        error: () => {
          expect(actualTries).toEqual(expectedTries);
          ///
          // console.groupEnd();
          done();
        }
      });
    });

    it('should use the provided delay as the initial delay', (done: DoneFn) => {
      ///
      // console.groupCollapsed('=== SPEC - delay first retry');
      const inputUrl: string = '/6ih/ZMZgB';
      const inputDelay: number = 30;
      const inputRetries: number = 3;
      const expectedData: string = 'YGbI8g1';
      let tries: number = 0;

      httpSpy.get.and.callFake(() => {
        return Observable.create((observer) => {
          ///
          // console.group('SPEC - response$');
          tries++;
          ///
          // console.log(`attempt #${tries}`);
          if (tries < 2) {
            ///
            // console.log('SPEC - throwing error');
            // console.groupEnd();
            observer.error({ status: 533 });
          }
          else {
            ///
            // console.log('SPEC - returning data');
            // console.groupEnd();
            observer.next(expectedData);
          }
        });
      });

      scheduler.run(({ expectObservable }) => {
        const expectedMarble: string = `${inputDelay}ms d`;
        const expectedValues: { [value: string]: any } = { d: expectedData };
        const data$: Observable<string> = httpSpy.get(inputUrl).pipe(httpRetryBackoff(inputRetries, inputDelay));
        expectObservable(data$).toBe(expectedMarble, expectedValues);
        ///
        // console.groupEnd();
        done();
      });
    });

    it('should increment delays by the provided delay', (done: DoneFn) => {
      ///
      // console.groupCollapsed('=== SPEC - delay third retry');
      const inputUrl: string = '/aylZi/SLX6g';
      const inputDelay: number = 85;
      const inputRetries: number = 3;
      const expectedData: string = 'nLkY1VMdWw';
      const expectedDelay: number = 255;
      let tries: number = 0;

      httpSpy.get.and.callFake(() => {
        return Observable.create((observer) => {
          ///
          // console.group('SPEC - response$');
          tries++;
          ///
          // console.log(`attempt #${tries}`);
          if (tries < 4) {
            ///
            // console.log('SPEC - throwing error');
            // console.groupEnd();
            observer.error({ status: 568 });
          }
          else {
            ///
            // console.log('SPEC - returning data');
            // console.groupEnd();
            observer.next(expectedData);
          }
        });
      });

      scheduler.run(({ expectObservable }) => {
        const expectedMarble: string = `${expectedDelay}ms d`;
        const expectedValues: { [value: string]: any } = { d: expectedData };
        const data$: Observable<string> = httpSpy.get(inputUrl).pipe(httpRetryBackoff(inputRetries, inputDelay));
        expectObservable(data$).toBe(expectedMarble, expectedValues);
        ///
        // console.groupEnd();
        done();
      });
      
    });

  });

  describe('data validation', () => {
    
    it('should reject a negative maxRetries value', () => {
      ///
      // console.groupCollapsed('=== SPEC - reject negative maxRetries');
      const inputUrl: string = '/wxsZ7g249qMxtGeF6x9P/a70kN';
      const badRetries: number = -7;
      
      httpSpy.get.and.returnValue(Observable.create((observer) => {
        observer.error({status: 579});
      }));

      expect(() => {
        const response$: Observable<string> = httpSpy.get(inputUrl).pipe(httpRetryBackoff(badRetries));
        response$.subscribe(() => {});
      }).toThrow(new TypeError('maxRetries must be positive'));
      ///
      // console.groupEnd();
    });
    
    it('should reject a maxRetries value of 0', () => {
      ///
      // console.groupCollapsed('=== SPEC - reject maxRetries = 0');
      const inputUrl: string = '/F9u5u/e9Gmb';
      const badRetries: number = 0;

      httpSpy.get.and.returnValue(Observable.create((observer) => {
        observer.error({ status: 579 });
      }));

      expect(() => {
        const response$: Observable<string> = httpSpy.get(inputUrl).pipe(httpRetryBackoff(badRetries));
        response$.subscribe(() => { });
      }).toThrow(new TypeError('maxRetries must be positive'));
      ///
      // console.groupEnd();
    });
    
    it('should reject a floating-point maxRetries value', () => {
      ///
      // console.groupCollapsed('=== SPEC - reject floating-point maxRetries');
      const inputUrl: string = '/CwLdi/Jf';
      const badRetries: number = 10.298;

      httpSpy.get.and.returnValue(Observable.create((observer) => {
        observer.error({ status: 579 });
      }));

      expect(() => {
        const response$: Observable<string> = httpSpy.get(inputUrl).pipe(httpRetryBackoff(badRetries));
        response$.subscribe(() => { });
      }).toThrow(new TypeError('maxRetries must be an integer'));
      ///
      // console.groupEnd();
    });
    
    it('should reject a negative backoffDelay value', () => {
      ///
      // console.groupCollapsed('=== SPEC - reject negative backoffDelay');
      const inputUrl: string = '/czzPqb';
      const inputRetries: number = 4;
      const badBackoffDelay: number = -7;

      httpSpy.get.and.returnValue(Observable.create((observer) => {
        observer.error({ status: 579 });
      }));

      expect(() => {
        const response$: Observable<string> = httpSpy.get(inputUrl).pipe(httpRetryBackoff(inputRetries, badBackoffDelay));
        response$.subscribe(() => { });
      }).toThrow(new TypeError('backoffDelay must be positive'));
      ///
      // console.groupEnd();
    });

    it('should reject a backoffDelay value of 0', () => {
      ///
      // console.groupCollapsed('=== SPEC - reject backoffDelay = 0');
      const inputUrl: string = '/SrLy0Ie/8WX';
      const inputRetries: number = 7;
      const badBackoffDelay: number = 0;

      httpSpy.get.and.returnValue(Observable.create((observer) => {
        observer.error({ status: 579 });
      }));

      expect(() => {
        const response$: Observable<string> = httpSpy.get(inputUrl).pipe(httpRetryBackoff(inputRetries, badBackoffDelay));
        response$.subscribe(() => { });
      }).toThrow(new TypeError('backoffDelay must be positive'));
      ///
      // console.groupEnd();
    });
    
    it('should reject a floating-point backoffDelay value', () => {
      ///
      // console.groupCollapsed('=== SPEC - reject floating-point backoffDelay');
      const inputUrl: string = '/6UfCmm/xd8Q';
      const inputRetries: number = 4;
      const badBackoffDelay: number = 3.483

      httpSpy.get.and.returnValue(Observable.create((observer) => {
        observer.error({ status: 579 });
      }));

      expect(() => {
        const response$: Observable<string> = httpSpy.get(inputUrl).pipe(httpRetryBackoff(inputRetries, badBackoffDelay));
        response$.subscribe(() => { });
      }).toThrow(new TypeError('backoffDelay must be an integer'));
      ///
      // console.groupEnd();
    });

  });


});
