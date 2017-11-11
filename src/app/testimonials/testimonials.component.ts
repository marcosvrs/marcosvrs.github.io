import { Component, OnInit } from '@angular/core';

import { Testimonial } from 'app/models/testimonial.model';
import { TestimonialService } from 'app/services/testimonial.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  testimonials; // : Promise<any>;
  showAddTestimonialModal = false;

  constructor(private testimonialService: TestimonialService) { }

  ngOnInit() {
    this.testimonials = this.testimonialService.getTestimonials();
  }

  showModalClick() {
    this.showAddTestimonialModal = !this.showAddTestimonialModal;
  }
}
