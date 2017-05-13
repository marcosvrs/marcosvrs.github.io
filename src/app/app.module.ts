import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from 'app/core/core.module';

import { AppComponent } from 'app/app.component';
import { TestimonialsModule } from 'app/testimonials/testimonials.module';
import { DirectivesModule } from 'app/directives/directives.module';
import { GoogleAnalyticsEventsService } from 'app/services/google-analytics-events.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    CoreModule,
    TestimonialsModule,
    DirectivesModule
  ],
  providers: [GoogleAnalyticsEventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
