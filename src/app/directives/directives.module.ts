import { NgModule } from '@angular/core';
import { BsFormControlDirective } from 'app/directives/bs-form-control.directive';
import { LoaderDirective } from 'app/directives/loader.directive';

@NgModule({
  declarations: [BsFormControlDirective, LoaderDirective],
  exports: [BsFormControlDirective, LoaderDirective]
})
export class DirectivesModule { }
