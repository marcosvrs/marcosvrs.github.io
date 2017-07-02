import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestimonialsComponent } from 'app/testimonials/testimonials.component';
import { AddTestimonialComponent } from 'app/testimonials/add-testimonial/add-testimonial.component';

const testimonialRoutes: Routes = [{
  path: '', component: TestimonialsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(testimonialRoutes)],
  exports: [RouterModule]
})
export class TestimonialsRoutingModule { }
