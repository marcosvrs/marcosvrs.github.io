import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { GoogleAnalyticsService } from 'app/services/google-analytics-events.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent
      ],
      imports: [RouterTestingModule],
      providers: [GoogleAnalyticsService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have no error`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.error).toEqual(false);
  }));
  // it('should render an h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Marcos Vinícius Rubido');
  // }));
});
