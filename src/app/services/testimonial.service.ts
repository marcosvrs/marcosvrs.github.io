import { Injectable, isDevMode } from '@angular/core';

import { FirebaseService } from 'app/services/firebase.service';
import { Testimonial } from 'app/models/testimonial.model';

@Injectable()
export class TestimonialService {

  private testimonialsRef:firebase.database.Reference;

  constructor(private firebase: FirebaseService) {
    this.testimonialsRef = this.firebase.app.database().ref('testimonials');
  }

  linkedinAuth() {
    window.open('/API/linkedInToken');
  }

  getTestimonials() {
    return this.testimonialsRef.once('value').then((value) => {
      var ret: Testimonial[] = [];
      value.forEach((testimonial) => {
        ret.push(new Testimonial(<Testimonial>testimonial.toJSON()));
        return false;
      });
      return ret;  
  });
  }

  addTestimonial(testimonial: Testimonial) {
     this.testimonialsRef.push(testimonial).then(
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
