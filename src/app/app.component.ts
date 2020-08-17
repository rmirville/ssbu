import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

const BASE_HREF: string = '';

@Component({
  selector: 'ssbu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Super Smash Bros. Ultimate Tools';
  ariaSkipPath = BASE_HREF + '/#main';

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      if( !this.router.url.endsWith('#main') ) {
        this.ariaSkipPath = BASE_HREF + this.router.url + '#main';
      }
      else {
        this.ariaSkipPath = BASE_HREF + this.router.url;
      }
    });
  }
}
