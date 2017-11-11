import { Component, OnInit, isDevMode } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { GoogleAnalyticsService } from 'app/services/google-analytics-events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  errorText: any;
  error = false;
  /**
   * Create a App Component
   * @param router - Router provider service
   */
  constructor(public router: Router, private route: ActivatedRoute, private googleAnalyticsService: GoogleAnalyticsService) { }

  ngOnInit() {
    this.googleAnalyticsService.emitPageView();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.googleAnalyticsService.emitPageView(event.urlAfterRedirects);
      }
    });

    this.route.queryParams.subscribe(params => {
      if (isDevMode()) {
        console.log(params);
      }
      if (params['error'] === '404') {
        this.errorText = 'The page you requested cannot be found!';
        this.error = true;
      } else if (params['error']) {
        this.error = true;
        this.errorText = params['error'];
      } else {
        this.error = false;
      }
    });
  }
}
