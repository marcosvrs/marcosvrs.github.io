import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from "angularfire2";

import { Testimonial } from "app/models/testimonial";
import { TestimonialService } from "app/services/testimonial.service";

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  testimonials: FirebaseListObservable<Testimonial[]>;
  showAddTestimonialModal: boolean = false;

  constructor(private testimonialService: TestimonialService) { }

  ngOnInit() {
    this.testimonials = this.testimonialService.getTestimonials();
  }

  showModalClick() {
    this.showAddTestimonialModal = !this.showAddTestimonialModal;
  }
}
