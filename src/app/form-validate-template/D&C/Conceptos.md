## ¿Qué es el NG_VALIDATORS?
 * Es un TOKEN(una identificación).

## ¿Cuál es la función del TOKEN?
 * Es de proveer una identificación a Angular para que sepa que se va a injectar Validator, ValidatorFn, ValidatorErrors a los elementos de entrada (input) de la vista.
     
## ¿Qué es el Validator?
 * Es una interface que se implementa en una clase para crear una **directiva de validador** con un -> error personalizado.
  ***export class ForbiddenValidatorDirective implements Validator {...}***

##  ¿Para que se implementa en la clase un Validator?
 * Para un control o inspección personalizado a un elemento de entrada (input) del frm por medio de un Método "validate".
    ***validate (AbstractControl) : validatorErrors | null {return 'custom': true;}***
    * **AbstractControl**: Es el elemento de entrada(input) del Frm.
    * **ValidatorError** significa valor invalido.
    * **Null**: significa valor valido.

## ¿Qué es ValidatorFn?   
  * Es una interfaz que se aplica a una función validadora para un elemento de entrada (input) sin necesidad de crear una clase o directiva.
       
## ¿Para que se implementa un ValidatorFn?
 *  Para que reciba un elemento de entrada(control) y devuelva un diagnostico como:
  * **AbstractControl**: Es el elemento de entrada(input) del Frm.
   * **ValidatorError** significa valor invalido.
  * **Null**: significa valor valido.
  * **return**: retorna un true o false por medio de un test que compara el control(input-AbstractControl) vs el valor por parámetro.
