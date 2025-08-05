###### Nivel 2 (Comprender)
## 1. ¿Qué es el NG_VALIDATORS?
 * Es un **token de inyección de dependencias de Angular** (🆔 una identificación).

## 2.¿Cuál es la función del TOKEN?
  * **Proveer una identificación** a Angular para que sepa que se va a *injectar* validadores como:
   **Validator, ValidatorFn, ValidatorErrors** a los elementos de entrada (input) de la vista.
     
## 3. ¿Qué es el Validator?
 * Es una **interface** que se implementa en una ***clase*** para crear una **directiva de validador** con un -> error personalizado.
  ***export class ForbiddenValidatorDirectiv.e implements Validator {...}***

## 4. ¿Para que se implementa en la clase un Validator?
 * Para un control o inspección personalizado a un elemento de entrada (input) del frm por medio de un Método "validate".
    ***validate (AbstractControl) : validatorErrors | null {return 'custom': true;}***
    * **AbstractControl**: Es el elemento de entrada(input) del Frm.
    * **ValidatorError** significa valor invalido.
    * **Null**: significa valor valido.

## 5. ¿Qué es ValidatorFn?   
  * Es una interfaz que se aplica a una función validadora para un elemento de entrada (input) sin necesidad de crear una clase o directiva.
       
## 6. ¿Para que se implementa un ValidatorFn?
 *  Para que reciba un elemento de entrada(control) y devuelva un diagnostico como:
  * **AbstractControl**: Es el elemento de entrada(input) del Frm.
   * **ValidatorError** significa valor invalido.
  * **Null**: significa valor valido.
  * **return**: retorna un true o false por medio de un test que compara el control(input-AbstractControl) vs el valor por parámetro.
