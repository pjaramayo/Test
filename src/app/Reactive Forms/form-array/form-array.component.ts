import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormArray,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-array',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-array.component.html',
  styleUrl: './form-array.component.css',
})
export class FormArrayComponent {
  private formBuilder = inject(FormBuilder);

  profileForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),

    aliases: this.formBuilder.array([this.formBuilder.control('pja'),this.formBuilder.control('RW')],),
  });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
     //Get es un método de la clase AbstractControl, y FormControl, FormGroup, FormArray heredan esta.
     //Trae un espacio de tipo colección(as FormArray).
     //get() es un método universal para acceder a los controles hijos dentro de un contenedor de formulario (FormGroup o FormArray).
     //get puede solicitar cualquier propiedad del profileName(firstName, etc...).
     //En pocas palabra lo lee(get).
  }

  addAlias() {
    this.aliases.push(this.formBuilder.control(''));
  }

  enviarFormulario() {
    console.log(this.profileForm.value);

  }
}
