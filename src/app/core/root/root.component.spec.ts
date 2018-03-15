import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RootComponent } from './root.component';
import { FooterComponent } from './footer/footer.component';
import { GoogleAnalyticsService } from 'app/services/google-analytics-events.service';

describe('RootComponent', () => {
  let component: RootComponent;
  let fixture: ComponentFixture<RootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RootComponent,
        FooterComponent
      ],
      imports: [RouterTestingModule],
      providers: [GoogleAnalyticsService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
