import { Component } from '@angular/core';
import { GoogleAnalyticsService } from 'app/services/google-analytics-events.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private googleAnalyticsEventsService: GoogleAnalyticsService) { }

  onClick(button: string) {
    this.googleAnalyticsEventsService.emitEvent('Buttons', 'Click', button);
  }

}
