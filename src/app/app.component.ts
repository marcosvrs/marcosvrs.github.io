import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { GoogleAnalyticsService } from 'app/services/google-analytics-events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  /**
   * Create a App Component
   * @param router - Router provider service
   */
  constructor(public router: Router, private googleAnalyticsService: GoogleAnalyticsService) {
    googleAnalyticsService.emitPageView();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        googleAnalyticsService.emitPageView(event.urlAfterRedirects);
      }
    });
  }
}
