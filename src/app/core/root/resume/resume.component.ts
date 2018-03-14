import { Component, HostBinding } from '@angular/core';
import { GoogleAnalyticsService } from '../../../services/google-analytics-events.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {

  // @HostBinding('class') class = 'container-fluid';

  constructor(private googleAnalyticsService: GoogleAnalyticsService) { }

  onClick(category: string, action: string, label: string, value?: any) {
    this.googleAnalyticsService.emitEvent(category, action, label, value);
  }

}
