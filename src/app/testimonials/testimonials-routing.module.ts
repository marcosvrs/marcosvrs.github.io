import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestimonialsComponent } from 'app/testimonials/testimonials.component';
import { AddTestimonialComponent } from 'app/testimonials/add-testimonial/add-testimonial.component';

const routes: Routes = [{
  path: '', component: TestimonialsComponent, children: [
    { path: 'add', component: AddTestimonialComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestimonialsRoutingModule { }
