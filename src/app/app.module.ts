import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TestimonialsComponent } from './views/testimonials/testimonials.component';
import { TestimonialComponent } from './views/testimonials/testimonial/testimonial.component';
import { AddTestimonialComponent } from './views/testimonials/add-testimonial/add-testimonial.component';
import { HomeComponent } from './views/home/home.component';
import { ResumeComponent } from './views/resume/resume.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TestimonialsComponent,
    TestimonialComponent,
    AddTestimonialComponent,
    HomeComponent,
    ResumeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
