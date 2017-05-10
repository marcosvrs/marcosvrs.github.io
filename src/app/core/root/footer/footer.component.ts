import { Component, isDevMode } from '@angular/core';
import { GoogleAnalyticsEventsService } from "app/services/google-analytics-events.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private googleAnalyticsEventsService: GoogleAnalyticsEventsService) { }

  onClick(button: string) {
    if (!isDevMode()) {
      this.googleAnalyticsEventsService.emitEvent('Buttons', 'Click', button);
    }
  }

}
