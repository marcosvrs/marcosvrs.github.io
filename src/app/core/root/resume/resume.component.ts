import { Component } from '@angular/core';
import { GoogleAnalyticsService } from 'app/services/google-analytics-events.service';

@Component({
  selector: 'app-resume',
  host: {
    class: 'container-fluid'
  },
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {

  constructor(private googleAnalyticsService: GoogleAnalyticsService) { }

  onClick(category: string, action: string, label: string, value?: any) {
    this.googleAnalyticsService.emitEvent(category, action, label, value);
  }

}
