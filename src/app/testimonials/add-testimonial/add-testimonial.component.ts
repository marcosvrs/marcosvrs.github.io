import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { TestimonialService } from 'app/services/testimonial.service';

@Component({
  selector: 'app-add-testimonial',
  templateUrl: './add-testimonial.component.html',
  styleUrls: ['./add-testimonial.component.scss']
})
export class AddTestimonialComponent {

  // @Output() hideModalClick = new EventEmitter<boolean>();

  // /** Auxiliary variables for state */
  // loading: boolean = false;
  // error: boolean = false;
  // success: boolean = false;
  // linkedinLogin: boolean = false;

  // constructor(private testimonialService: TestimonialService) { }

  // onLinkedinLogin() {
  //   this.testimonialService.linkedinAuth();
  // }

  // onHideModalClick() {
  //   this.hideModalClick.emit();
  // }

  // addButtonClick() {
  // }

  // onSubmit() {

  // }

}
