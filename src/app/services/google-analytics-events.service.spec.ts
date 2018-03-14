import { TestBed, inject } from '@angular/core/testing';

import { GoogleAnalyticsService } from './google-analytics-events.service';

describe('GoogleAnalyticsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleAnalyticsService]
    });
  });

  it('should ...', inject([GoogleAnalyticsService], (service: GoogleAnalyticsService) => {
    expect(service).toBeTruthy();
  }));
});
