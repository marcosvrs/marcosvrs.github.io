import { Injectable, isDevMode } from '@angular/core';

import { FirebaseService } from 'app/services/firebase.service';
import { Testimonial } from 'app/models/testimonial.model';

@Injectable()
export class TestimonialService {

  constructor(private firebase: FirebaseService) {
  }

  getTestimonials(): firebase.database.Reference {
    return this.firebase.app.database().ref('testimonials');
  }

  addTestimonial(testimonial: Testimonial) {
    this.getTestimonials().push(testimonial).then(
      (ret: Response) => {
        return true;
      },
      (error: Error) => {
        if (isDevMode()) {
          console.error(error);
        }
        return false;
      }
    );
  }

}
