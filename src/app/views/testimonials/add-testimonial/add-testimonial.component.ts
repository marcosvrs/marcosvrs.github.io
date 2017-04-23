import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TestimonialService } from '../../../services/testimonial.service';
import { Testimonial } from '../../../models/testimonial';

@Component({
  selector: 'app-add-testimonial',
  templateUrl: './add-testimonial.component.html',
  styleUrls: ['./add-testimonial.component.scss']
})

export class AddTestimonialComponent implements OnInit {

  @Output() showModalClick: EventEmitter<null> = new EventEmitter();

  constructor(private testimonialService: TestimonialService) { }

  ngOnInit() {
  }

  hideModalClick() {
    this.showModalClick.emit();
  }

  addButtonClick() {
    this.testimonialService.addTestimonial(new Testimonial('', '', '', ''));
  }

}
