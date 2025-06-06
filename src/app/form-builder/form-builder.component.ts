import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-builder',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.css',
})
export class FormBuilderComponent {
  private fb = inject(FormBuilder);
  formulario = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],

      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zip: ['', Validators.required],
      }),
    });


  //Este es un enfoque para el uso de constructor y sin inject.
    //formulario: FormGroup;

  // constructor(private fb: FormBuilder) {
  //   this.formulario = this.fb.group({
  //     firstName: ['', [Validators.required, Validators.minLength(3)]],
  //     lastName: ['', [Validators.required, Validators.minLength(3)]],

  //     address: this.fb.group({
  //       street: ['', Validators.required],
  //       city: ['', Validators.required],
  //       state: ['', Validators.required],
  //       zip: ['', Validators.required],
  //     }),
  //   });
  // }

  enviarFormulario() {
    console.log(this.formulario.value);
  }
}

