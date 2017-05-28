import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TestimonialsRoutingModule } from './testimonials-routing.module';
import { TestimonialsComponent } from './testimonials.component';
import { AddTestimonialComponent } from './add-testimonial/add-testimonial.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { TestimonialService } from 'app/services/testimonial.service';

@NgModule({
  imports: [
    CommonModule,
    TestimonialsRoutingModule,
    FormsModule
  ],
  declarations: [TestimonialsComponent, AddTestimonialComponent, TestimonialComponent],
  providers: [TestimonialService],
})
export class TestimonialsModule { }
