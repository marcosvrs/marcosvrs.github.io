import { Component, OnInit, Input } from '@angular/core';
import { Testimonial } from '../../../models/testimonial';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {
  @Input() testimonialInstance: Testimonial;

  constructor() { }

  ngOnInit() {
  }

}
