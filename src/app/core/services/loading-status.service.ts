import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingStatusService {

  statuses: { [name: string]: Subject<boolean> };

  constructor() {
    this.statuses = {};
  }

  createStatus(compName: string): Observable<boolean> {
    console.group('LoadingStatusService::createStatus()');
    if (!Object.keys(this.statuses).includes(compName)) {
      this.statuses[compName] = new Subject<boolean>();
      this.statuses[compName].next(false);
    }
    console.groupEnd();
    return this.statuses[compName].asObservable();
  }

  getStatus(compName: string): Observable<boolean> {
    console.group('LoadingStatusService::getStatusObs()');
    if (Object.keys(this.statuses).includes(compName)) {
      console.groupEnd();
      return this.statuses[compName].asObservable();
    }
    else {
      console.groupEnd();
      return null;
    }
  }

  startLoading(compName: string): void {
    console.group('LoadingStatusService::startLoading()');
    if (Object.keys(this.statuses).includes(compName)) {
      this.statuses[compName].next(true);
    }
    console.groupEnd();
  }

  stopLoading(compName: string): void {
    console.group('LoadingStatusService::stopLoading()');
    if (Object.keys(this.statuses).includes(compName)) {
      this.statuses[compName].next(false);
    }
    console.groupEnd();
  }
}
