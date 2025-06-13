# ¿Qué es el FromBuilder?
  1. Es un servicio para construir FormGroup, FormControl, FormArray. No encapsula directamente elementos de entrada.

# ¿Porqué no se importa en el modelo los FormGroup y FormGroup cuando se utiliza FormBuiler?
  1. Porque están de manera implicita, el FormBuilder ancapsula estas por medio del método group, este orquesta(new FormControl, FormGroup(),new FormArray(), validadores )
     
# ¿Cuál es el escenario ideal para su uso?
  1. Para las versiones mas modernas de Angular(>15) ya que no es necesario el uso de un constructor si no de un inject.
  2. Para formularios estructurados y anidados.

  # ¿Qué son las directivas [formGroup] y [formControl]?
  1. La directiva [formGroup] que vincula un contenedor a un FormGroup anidado.
   La directiva [formControl] que vincula un elemento de entrada (<input>, <select>, <textarea>) a una instancia de FormControl dentro de un FormGroup.

