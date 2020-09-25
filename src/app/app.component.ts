import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { LoadingStatusService } from './core/services/loading-status.service';

const BASE_HREF: string = '';

@Component({
  selector: 'ssbu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit {
  title: string = 'SSBU Tools';
  ariaSkipPath: string = BASE_HREF + '/#main';
  isLoading: boolean;
  isLoading$: Observable<boolean>;

  constructor(private router: Router, private lss: LoadingStatusService) {
    // console.group('AppComponent::constructor()');
    this.isLoading = true;
    // console.groupEnd();
  }

  ngOnInit() {
    // console.group('AppComponent::ngOnInit()');
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      if( !this.router.url.endsWith('#main') ) {
        this.ariaSkipPath = BASE_HREF + this.router.url + '#main';
      }
      else {
        this.ariaSkipPath = BASE_HREF + this.router.url;
      }
    });
    this.isLoading$ = this.lss.createStatus('app');
    this.isLoading$.subscribe(status => {
      setTimeout(() => {
        this.isLoading = status;
        // console.log(`new loading status: ${status}`);
      }, 0);
    });
    this.lss.startLoading('app');
    // console.groupEnd();
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.group('AppComponent::ngOnChanges()');
    // console.log(`changes to isLoading: ${JSON.stringify(changes.isLoading)}`);
    // console.groupEnd();
  }
}
