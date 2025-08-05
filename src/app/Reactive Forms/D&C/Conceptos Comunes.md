## ¿Qué es el ReactiveFormsModule?
   1. Es un módulo.

## ¿Qué hace ReactiveFormsModule?
### Activa estas infraestructuras:
  1. Crear instancias explícitas del Form Model en el componente.
      Form Control, Form Group, Form Array.

  2. Conectar esas instancias con elementos HTML a través de directivas como [formControl], [formGroup], etc.


  3. Suscribirte a cambios(valueChanges) y manejar validaciones personalizadas.
  El estado del control: valid, touched, dirty, etc.
    Los observables como:
     .valueChanges → emite nuevos valores
     .statusChanges → emite cambios en validación
  
  4. Provee servicios:
  FormBuilder: Ayuda a construir FormGroups y FormControls fácilmente.

## ¿Qué es el Form Model?
   1. Es un concepto que se refiere a la estructura subyacente que representa los datos y estados del formulario del componente.
   Datos: el valor.
   Estado: valid, required, touche...etc.

   2. Ambas estrategias de formularios-reactive y template-driven trabajan sobre ese mismo fundamento compartido


## ¿Qué son las FormControlDirective, FormGroupDirective, FormArrayDirective?
  1. Son Directivas subyacentes pertenecientes a los:
   Atributo Binding [formControl] → FormControlDirective
   Atributo Binding [formGroup]   → FormGroupDirective
   Atributo Binding [formArray]   → FormArrayDirective

## ¿Qué hace FormControlDirective?
  1. Conexión subyasente entre el modelo y la vista: FormControlDirective se encarga de enlazar un FormControl, FormGroup, FormArray del modelo (ts) con un control de la vista (HTML) como input, select, etc.

  2. Sincronización bidireccional: Se asegura de que el valor y estado (validaciones, errores, etc.) del FormControl, FormGroup, FormArray se refleje en el DOM, y que los cambios del usuario se actualicen en el modelo.

  3. Detrás del atributo binding [formControl]: Cuando usas [formControl] en el HTML, Angular utiliza internamente FormControlDirective para crear esta vinculación.

## ¿Qué es el ControlValueAccessor?
  1. Es una interfaz(Concepto de Ts) que contien 4 métodos para que el FormControlDirective pueda leer y escribir valores (Eje:sofía) y saber cuando el usr interactua.
