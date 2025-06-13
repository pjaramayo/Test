# ¿Que es FormGroup?.
  1. Es una encapsulacíon y gestión de una colección de "FormControls" u otros FormGroups anidados/FormArrays. Es la representación del grupo en tu modelo.
  2. Es un objeto de datos estructurados en tu modelo de datos que representa la coleción de elementos de entrada de un formulario.
  3. Se puede anidar un grupo de formularios.

# ¿Que actualiza desde la parte del modelo de datos?.
  1. Actualiza solo la parte de interes de todo el formulario.

# ¿Cuantas maneras de actualizar el valor del modelo existe?.
  1. setValue(): cuando quieras asegurarte de que todos los campos del formulario se actualizan correctamente.
     Presenta error cuando no se involucra a todos los campos.
 
  2. patchValue(): cuando solo necesites modificar algunos campos, como en actualizaciones parciales o cargas   dinámicas de datos.
     Solo actualiza los valores indicados y deja intactos los demás.

