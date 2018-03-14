import { Component } from '@angular/core';
import { GoogleAnalyticsService } from '../../../services/google-analytics-events.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private googleAnalyticsService: GoogleAnalyticsService) { }

  onClick(category: string, action: string, label: string, value?: any) {
    this.googleAnalyticsService.emitEvent(category, action, label, value);
  }

}
