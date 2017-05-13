import { Component } from '@angular/core';

import { TestimonialService } from 'app/services/testimonial.service';

@Component({
  selector: 'app-add-testimonial',
  templateUrl: './add-testimonial.component.html',
  styleUrls: ['./add-testimonial.component.scss']
})
export class AddTestimonialComponent {

  constructor(private testimonialService: TestimonialService) { }

  hideModalClick() {
  }

  addButtonClick() {
  }

  onSubmit() {

  }

}
