import { Component, Input } from '@angular/core';

import { Testimonial } from 'app/models/testimonial.model';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent {
  @Input() testimonialInstance: Testimonial;

  constructor() { }

}
