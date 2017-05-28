import { Component, ViewChild, isDevMode, AfterViewChecked, OnDestroy } from '@angular/core';
import { NgForm, NgModel, AbstractControl, FormGroup } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';
import { Contact } from 'app/models/contact.model';
import { ContactService } from 'app/services/contact.service';
import { GoogleAnalyticsService } from 'app/services/google-analytics-events.service';

@Component({
  selector: 'app-contact',
  host: {
    class: 'container-fluid'
  },
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [ContactService, GoogleAnalyticsService]
})
export class ContactComponent implements AfterViewChecked, OnDestroy {
  /** Binding */
  @ViewChild('contactForm') contactForm: NgForm;
  contactName: string = '';
  contactEmail: string = '';

  /** Auxiliary variables for state */
  loading: boolean = false;
  error: boolean = false;
  success: boolean = false;

  /** Auxiliary variables for Subscriptions */
  contactNameSubscribe: Subscription;
  contactEmailSubscribe: Subscription;

  constructor(private contactService: ContactService, private googleAnalyticsEventsService: GoogleAnalyticsService) { }

  ngAfterViewChecked() {
    if (this.contactForm.form.contains('name') && !this.contactNameSubscribe) {
      this.contactNameSubscribe = this.contactForm.form.get('name').valueChanges.subscribe((value) => this.onValueChanges(value, 0));
    }
    if (this.contactForm.form.contains('email') && !this.contactEmailSubscribe) {
      this.contactEmailSubscribe = this.contactForm.form.get('email').valueChanges.subscribe((value) => this.onValueChanges(value, 1));
    }
  }

  ngOnDestroy() {
    this.contactNameSubscribe.unsubscribe();
    this.contactEmailSubscribe.unsubscribe();
  }

  onValueChanges(value: string, input: number) {
    switch (input) {
      case 0:
        this.contactName = (!this.checkModelErrors(this.contactForm.form.get('name'))) ? value : '';
        break;
      case 1:
        this.contactEmail = (!this.checkModelErrors(this.contactForm.form.get('email'))) ? value : '';
        break;
    }
    let contactMessageControl: AbstractControl = this.contactForm.form.get('message');
    if (contactMessageControl && !contactMessageControl.touched) {
      contactMessageControl.setValue('Hey Marcos!\nI just came to say hello!\n\nSincerely,\n' + this.contactName + '\n' + this.contactEmail);
    }
  }

  onSubmit(values: Contact) {
    this.loading = true;
    this.success = this.error = false;
    this.googleAnalyticsEventsService.emitEvent('Forms', 'Submit', 'Contact');
    this.contactService.sendContactMessage(values)
      .subscribe(
      response => {
        this.loading = this.error = false;
        this.success = true;
        if (isDevMode()) {
          console.log('Response Ok');
        }
        this.contactForm.reset();
      },
      error => {
        this.loading = this.success = false;
        this.error = true;
        if (isDevMode()) {
          console.log('Response error: ');
          console.log(error);
        }
      },
      () => {
        this.loading = this.error = false;
        this.success = true;
        if (isDevMode()) {
          console.log('Complete');
        }
        this.contactForm.reset();
      }
      );
  }

  checkModelErrors(control: AbstractControl): boolean {
    if (!control) {
      return;
    } else {
      return (control.errors && (control.dirty || control.touched));
    }
  }

  onClick(button: string) {
    this.googleAnalyticsEventsService.emitEvent('Buttons', 'Click', button);
  }
}
