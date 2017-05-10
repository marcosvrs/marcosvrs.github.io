import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { AbstractControl } from "@angular/forms";

const formControlDangerClass: string = 'form-control-danger';
const formControlSuccessClass: string = 'form-control-success';
const formControlWarningClass: string = 'form-control-warning';
const formGroupDangerClass: string = 'has-danger';
const formGroupSuccessClass: string = 'has-success';
const formGroupWarningClass: string = 'has-warning';
const formControlClasses: string[] = [formControlDangerClass, formControlSuccessClass, formControlWarningClass];
const formGroupClasses: string[] = [formGroupDangerClass, formGroupSuccessClass, formGroupWarningClass];

@Directive({
  selector: '[appBsFormControl]'
})
export class BsFormControlDirective {
  @Input('appBsFormControl') control: AbstractControl;

  constructor(private el: ElementRef,
    private re: Renderer2) { }

  @HostListener('input') onInput() {
    this.handleClasses();
  }

  @HostListener('focusout') onfocus() {
    this.handleClasses();
  }

  private handleClasses(): void {

    let activeClass: string[];
    if (this.control.dirty || this.control.touched) {
      if (this.control.valid) {
        activeClass = [formControlSuccessClass, formGroupSuccessClass];

      } else if (this.control.hasError) {
        activeClass = [formControlDangerClass, formGroupDangerClass];
      } else {
        activeClass = [formControlWarningClass, formGroupWarningClass];
      }
    } else {
      activeClass = [];
    }

    const element = this.el.nativeElement;
    if (element.classList.contains('form-control')) {
      formControlClasses.forEach((currClass: string) => {
        if (currClass === activeClass[0]) {
          this.re.addClass(element, currClass);
        } else {
          this.re.removeClass(element, currClass);
        }
      });
    }

    const parentElement = element.parentElement;
    if (parentElement.classList.contains('form-group')) {
      formGroupClasses.forEach((currClass: string) => {
        if (currClass === activeClass[1]) {
          this.re.addClass(parentElement, currClass);
        } else {
          this.re.removeClass(parentElement, currClass);
        }
      });
    }


  }
}
