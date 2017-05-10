import { Injectable, isDevMode } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Testimonial } from '../models/testimonial';

@Injectable()
export class TestimonialService {

  constructor(private af: AngularFire) {
  }

  getTestimonials(): FirebaseListObservable<Testimonial[]> {
    return this.af.database.list('testimonials');
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
