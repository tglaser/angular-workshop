import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
  selector: 'input [appForbiddenNameValidator]',
  providers: [{provide: NG_VALIDATORS, useClass: ForbiddenNameValidatorDirective, multi: true}]
})
export class ForbiddenNameValidatorDirective implements Validator {

  constructor() {
  }

  registerOnValidatorChange(fn: () => void): void {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value === 'Alex') {
      return {'forbiddenName': {value: control.value}} as ValidationErrors;
    }
    return null;
  }

}
