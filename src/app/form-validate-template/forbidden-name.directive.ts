import { Directive, Input } from '@angular/core';
import {
  NG_VALIDATORS,
  AbstractControl,
  Validator,
  ValidatorFn,
  ValidationErrors,
} from '@angular/forms';

@Directive({
  selector: '[appForbiddenName]', //<input type="text" appForbiddenName="Ramón" /> El selector en @directive es un atributo(clave Valor)
  standalone: true, // ¡ESTO ES CRUCIAL PARA UN COMPONENTE STANDALONE!
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ForbiddenValidatorDirective,
      multi: true,
    },
  ],
})
export class ForbiddenValidatorDirective implements Validator {
  @Input('appForbiddenName') forbiddenName: string = ''; //Recibe el valor.
  //appForbiddenName es un alias que enlaza con el alias del html.
  //forbiddenName es una propiedad para trabajar en este fichero.ts, esta contiene Ramón.
  validate(control: AbstractControl): ValidationErrors | null {
    //Aqui se chequea que el input tenga valor a través del @Input(), no tiene sentido ejecutar la validación, ya que no hay nada contra qué comparar.
    if (!this.forbiddenName) {
      return null;
    }
    // console.log('Aq'+control.value)
    const forbiddenRegex = new RegExp(this.forbiddenName, 'i');
    return forbiddenNameValidator(forbiddenRegex)(control);
  }
}

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    console.log('es:'+forbidden)
    return forbidden ? {forbiddenName: {value:control.value}} : null;
  };
}
