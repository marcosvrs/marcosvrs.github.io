import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeComponent } from './resume.component';
import { GoogleAnalyticsService } from '../../../services/google-analytics-events.service';

describe('ResumeComponent', () => {
  let component: ResumeComponent;
  let fixture: ComponentFixture<ResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeComponent],
      providers: [GoogleAnalyticsService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
