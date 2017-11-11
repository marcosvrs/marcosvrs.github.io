import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { AbstractControl, NgModel } from '@angular/forms';

/**
 * Bootstrap v4 Form Validation classes
 */
const formControlClasses: string[] = ['is-invalid', 'is-valid', 'form-control-warning'];
const formGroupClasses: string[] = ['has-danger', 'has-success', 'has-warning'];

@Directive({
  selector: '[appBsFormControl]'
})
export class BsFormControlDirective {
  /**
   * bsFormControl is a directive for styling angular form control validation
   * with Bootstrap v3/v4 form validation classes
   *
   * Example to use:
   * `<div class="form-group">
   *   <label class="form-control-label" for="name">Name</label>
   *     <input type="text"
   *             class="form-control"
   *             placeholder="Name"
   *             id="name"
   *             name="name"
   *             [bsFormControl]="exampleName"
   *             required
   *             ngModel
   *             #exampleName="ngModel">
   *   </div>`
   *
   */
  constructor(private el: ElementRef, private control: NgModel, private re: Renderer2) { }

  /**
   * Listen for every input in the ngModel
   * After validation status changes
   */
  @HostListener('input') onInput() {
    this.handleClasses();
  }

  /**
   * Listen for when the focus leaves the ngModel
   */
  @HostListener('focusout') onFocus() {
    this.handleClasses();
  }

  /**
   * Listen to every change of ngModel
   * It's only used to get the reset event of form
   *
   * Can't be used to get change events of the ngModel
   * because it's fired before the validation status change
   *
   * @param value - Value of the ngModel
   */
  @HostListener('ngModelChange', ['$event']) onModelChange(value: any) {
    if (!value) {
      this.handleClasses();
    }
  }

  /**
   * Check the validation of the ngModel and define the class of the elements
   */
  private handleClasses(): void {
    let activeClass: string[];
    if (this.control.dirty || this.control.touched) {
      if (this.control.valid) {
        activeClass = [formControlClasses[1], formGroupClasses[1]];

      } else if (this.control.hasError) {
        activeClass = [formControlClasses[0], formGroupClasses[0]];
      } else {
        activeClass = [formControlClasses[2], formGroupClasses[2]];
      }
    } else {
      activeClass = [];
    }

    console.log(activeClass);

    const element: HTMLInputElement | HTMLTextAreaElement = this.el.nativeElement;
    if (element.classList.contains('form-control')) {
      formControlClasses.forEach((currentClass: string) => {
        if (currentClass === activeClass[0]) {
          this.re.addClass(element, currentClass);
        } else {
          this.re.removeClass(element, currentClass);
        }
      });
    }

    const parentElement = element.parentElement;
    if (parentElement.classList.contains('form-group')) {
      formGroupClasses.forEach((currentClass: string) => {
        if (currentClass === activeClass[1]) {
          this.re.addClass(parentElement, currentClass);
        } else {
          this.re.removeClass(parentElement, currentClass);
        }
      });
    }

  }
}
