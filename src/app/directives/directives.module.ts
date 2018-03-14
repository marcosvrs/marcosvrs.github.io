import { NgModule } from '@angular/core';
import { BsFormControlDirective } from './bs-form-control.directive';
import { LoaderDirective } from './loader.directive';

@NgModule({
  declarations: [BsFormControlDirective, LoaderDirective],
  exports: [BsFormControlDirective, LoaderDirective]
})
export class DirectivesModule { }
