import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

import { StageLoaderService } from '../../core/services/stage-loader/stage-loader.service';
import { Stage } from '../../shared/models/stage/stage.model';

@Injectable({
  providedIn: 'root'
})
export class StageComparatorResolverService implements Resolve<Stage[]> {

  constructor(private sls: StageLoaderService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Stage[]> | Observable<never> {
    return this.sls.loadStages();
  }
}
