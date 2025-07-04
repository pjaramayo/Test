// src/app/forbidden-name.directive.ts (¡o mejor renómbralo a forbidden-name.validator.ts!)

import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Función de ayuda para quitar acentos y normalizar a minúsculas
function normalizeString(str: string): string {
  if (!str) return '';
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    // Si el control está vacío o nulo, no validamos esta regla y devolvemos null (válido)
    if (!control.value) {
      return null;
    }

    const normalizedControlValue = normalizeString(control.value);
    const normalizedForbiddenPattern = normalizeString(nameRe.source);

    // Creamos un nuevo RegExp para la comparación sin acentos y en minúsculas
    const newNameRe = new RegExp(normalizedForbiddenPattern);

    const forbidden = newNameRe.test(normalizedControlValue);

    console.log(`Valor del control: '${control.value}', Normalizado: '${normalizedControlValue}'`);
    console.log(`Patrón prohibido: '${nameRe.source}', Normalizado: '${normalizedForbiddenPattern}'`);
    console.log(`¿Prohibido?: ${forbidden}`);

    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}

// *** La clase ForbiddenValidatorDirective ha sido eliminada si solo usas reactivos ***
