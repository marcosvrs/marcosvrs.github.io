import { EventEmitter } from '@angular/core';

import { Testimonial } from '../models/testimonial';

export class TestimonialService {
  testimonialChanged = new EventEmitter<Testimonial[]>();
  private Testimonials: Testimonial[] = [
    new Testimonial('1', 'Nome', 'Titulo', 'História'),
    new Testimonial('2', 'Nome 2', 'Titulo 2', 'História 2')
  ];

  constructor() { }

  getTestimonials(): Testimonial[] {
    return this.Testimonials.slice();
  }

  addTestimonial(testimonial: Testimonial) {
    this.Testimonials.push(testimonial);
    this.testimonialChanged.emit(this.Testimonials.slice());
  }

}
