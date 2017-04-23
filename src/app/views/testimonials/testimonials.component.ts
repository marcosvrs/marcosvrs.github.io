import { Component, OnInit } from '@angular/core';
import { TestimonialService } from '../../services/testimonial.service';
import { Testimonial } from '../../models/testimonial';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
  providers: [TestimonialService]
})
export class TestimonialsComponent implements OnInit {
  testimonials: Testimonial[] = [];
  showAddTestimonialModal: boolean = false;

  constructor(private testimonialService: TestimonialService) { }

  ngOnInit() {
    this.testimonials = this.testimonialService.getTestimonials();
    this.testimonialService.testimonialChanged.subscribe((testimonials: Testimonial[]) => {
      this.testimonials = testimonials;
    });
  }

  showModalClick() {
    this.showAddTestimonialModal = !this.showAddTestimonialModal;
  }

}
