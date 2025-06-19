import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, ValidationErrors } from '@angular/forms';

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}

@Directive({
  selector: '[appForbiddenName]',//<input type="text" appForbiddenName="Ramón" /> El selector en @directive es un atributo(clve Valor)
  standalone: true, // ¡ESTO ES CRUCIAL PARA UN COMPONENTE STANDALONE!
  providers: [{ provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true }]
})

export class ForbiddenValidatorDirective implements Validator {
  @Input('appForbiddenName') forbiddenName: string = '';

  validate(control: AbstractControl): ValidationErrors | null {
    if (!this.forbiddenName) {
      return null;
    }
    const forbiddenRegex = new RegExp(this.forbiddenName, 'i');
    return forbiddenNameValidator(forbiddenRegex)(control);
  }
}
