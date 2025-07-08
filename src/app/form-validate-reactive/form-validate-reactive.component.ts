import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para @if
import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms'; // ¡Importaciones clave para formularios reactivos!

// Importa tu validador personalizado (la función pura)
import { forbiddenNameValidator } from './forbidden-name.validator'; // Asumiendo que está en el mismo archivo o la ruta es correcta.

interface Actor {
  name: string;
}

@Component({
  selector: 'app-form-validate-template',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule, // ¡Ahora usamos ReactiveFormsModule!
    // ForbiddenValidatorDirective ya NO se importa aquí. Se usa solo la función.
  ],
  templateUrl: './form-validate-reactive.component.html',
  styleUrl: './form-validate-reactive.component.css'
})
export class FormValidateReactiveComponent implements OnInit {

  // Definimos el FormGroup que representará nuestro formulario
  actorForm!: FormGroup;

  // El modelo de datos (puede ser inicializado con valores o vacío)
  actor: Actor = {
    name: 'Superman' // Valor inicial para el campo 'name'
  };

  constructor(private fb: FormBuilder) { } // Inyectamos FormBuilder para crear el FormGroup

  ngOnInit(): void {
    // Inicializamos el FormGroup con sus FormControls y validadores
    this.actorForm = this.fb.group({
      // Definimos el FormControl 'name'
      name: new FormControl(this.actor.name, [ // Primer argumento: valor inicial
        Validators.required,                 // Validador: campo requerido
        Validators.minLength(4),             // Validador: longitud mínima de 4
        forbiddenNameValidator(/ramon/i)     // ¡Tu validador personalizado, pasado directamente!
      ])
      // Si tuvieras más campos, los definirías aquí de forma similar
    });

    // Opcional: Suscribirse a cambios en el valor de un control específico
    this.actorForm.get('name')?.valueChanges.subscribe(value => {
      // console.log('El nombre ha cambiado a:', value);
    });
  }

  onSubmit(): void {
    if (this.actorForm.valid) {
      console.log('Formulario enviado! Valor del formulario:', this.actorForm.value);
      // Aquí puedes enviar this.actorForm.value a un servicio o API
    } else {
      console.log('Formulario inválido!', this.actorForm);
      // Opcional: Marcar todos los controles como touched para mostrar errores al intentar enviar
      this.actorForm.markAllAsTouched();
    }
  }

  // Getter para acceder fácilmente al FormControl 'name' en la plantilla
  // Esto es para que en el HTML puedas usar 'nameControl.invalid' en lugar de 'actorForm.get('name')?.invalid'
  get nameControl(): FormControl {
    return this.actorForm.get('name') as FormControl;
  }
}
