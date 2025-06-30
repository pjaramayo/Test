import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, ValidationErrors } from '@angular/forms';


@Directive({
  selector: '[appForbiddenName]',//<input type="text" appForbiddenName="Ramón" /> El selector en @directive es un atributo(clave Valor)
  standalone: true, // ¡ESTO ES CRUCIAL PARA UN COMPONENTE STANDALONE!
  providers: [{ provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true }]
})

export class ForbiddenValidatorDirective implements Validator {
  @Input('appForbiddenName') forbiddenName: string = '';
  //appForbiddenName es un alias que enlaza con el alias del html.
  //forbiddenName es una propiedad para trabajar en este fichero.ts, esta contiene Ramón.
  validate(control: AbstractControl): ValidationErrors | null { //Aqui se chequea que el input tenga un valor.
    if (!this.forbiddenName) {
      return null;
    }
    const forbiddenRegex = new RegExp(this.forbiddenName, 'i');
    return forbiddenNameValidator(forbiddenRegex)(control);
  }
}

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    console.log('Bool ->'+forbidden)
    console.log('control value '+control.value)
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}
