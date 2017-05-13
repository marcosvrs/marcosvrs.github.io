import { Injectable, isDevMode } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';

import { Testimonial } from 'app/models/testimonial.model';

@Injectable()
export class TestimonialService {

  constructor(private db: AngularFireDatabase) {
  }

  getTestimonials(): FirebaseListObservable<Testimonial[]> {
    return this.db.list('testimonials');
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
