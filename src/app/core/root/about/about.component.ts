import { Component } from '@angular/core';
import { GoogleAnalyticsService } from 'app/services/google-analytics-events.service';

@Component({
  selector: 'app-about',
  host: {
    class: 'container-fluid'
  },
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  constructor(private googleAnalyticsEventsService: GoogleAnalyticsService) { }

  onClick(link: string) {
    this.googleAnalyticsEventsService.emitEvent('Links', 'Click', link);
  }

}
