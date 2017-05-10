import { Component, ViewChild, isDevMode } from '@angular/core';
import { NgForm, NgModel, AbstractControl } from '@angular/forms';

import { Subscription } from "rxjs/Subscription";
import { ContactService } from "app/services/contact.service";
import { GoogleAnalyticsEventsService } from "app/services/google-analytics-events.service";

@Component({
  selector: 'app-contact',
  host: {
    class: 'container-fluid'
  },
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [ContactService, GoogleAnalyticsEventsService]
})
export class ContactComponent {
  @ViewChild('contactForm') contactForm: NgForm;
  contactMessage = '';
  loading: boolean = false;
  error: boolean = false;

  constructor(private contactService: ContactService, private googleAnalyticsEventsService: GoogleAnalyticsEventsService) { }

  onValueChange(event?: any) {
    if (!this.contactForm) { return; }
    const form = this.contactForm.form;
    if (!form.contains('contactMessage')) { return; }
    const contactMessageControl = form.get('contactMessage');
    if (contactMessageControl && !contactMessageControl.touched) {
      contactMessageControl.setValue('Hey Marcos!\nI just came to say hello!\n\nSincerely,\n' + form.value.contactName + '\n' + form.value.contactEmail);
    }
  }

  onSubmit() {
    this.loading = true;
    if (!isDevMode()) {
      this.googleAnalyticsEventsService.emitEvent('Forms', 'Submit', 'Contact');
    }
    this.contactService.sendContactMessage(this.contactForm.value)
      .subscribe(
      response => {
        this.error = false;
        this.loading = false;
        if (isDevMode()) {
          console.log('Response Ok');
        }
        this.contactForm.reset();
      },
      error => {
        this.loading = false;
        this.error = true;
        if (isDevMode()) {
          console.log('Response error: ');
          console.log(error);
        }
      },
      () => {
        this.loading = false;
        this.error = false;
        if (isDevMode()) {
          console.log('Complete');
        }
        this.contactForm.reset();
      }
      );
  }

  checkModelErrors(control: AbstractControl): boolean {
    return (control.errors && (control.dirty || control.touched));
  }

  onClick(button: string) {
    if (!isDevMode()) {
      this.googleAnalyticsEventsService.emitEvent('Buttons', 'Click', button);
    }
  }
}
