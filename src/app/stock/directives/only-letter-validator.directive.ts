import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[appOnlyLetterValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: OnlyLetterValidatorDirective, multi: true }]
})
export class OnlyLetterValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return null;
    const value = control.value.toString();
    return value.match(/^[a-zA-Z]*$/gi) ? null : { error: 'asd'} ;
  }
}
