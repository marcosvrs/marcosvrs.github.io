import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { AbstractControl } from '@angular/forms';

const formControlClasses: string[] = ['form-control-danger', 'form-control-success', 'form-control-warning'];
const formGroupClasses: string[] = ['has-danger', 'has-success', 'has-warning'];

@Directive({
  selector: '[bsFormControl]'
})
export class BsFormControlDirective {
  @Input('bsFormControl') control: AbstractControl;

  constructor(private el: ElementRef,
    private re: Renderer2) { }

  @HostListener('input') onInput() {
    this.handleClasses();
  }

  @HostListener('focusout') onFocus() {
    this.handleClasses();
  }

  @HostListener('reset') onReset() {
    this.handleClasses();
  }

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

    const element = this.el.nativeElement;
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
