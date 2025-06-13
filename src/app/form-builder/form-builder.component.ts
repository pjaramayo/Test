import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
  NonNullableFormBuilder,
} from '@angular/forms';

//Este es un enfoque de tipado fuerte que se sugiere en las buenas practicas.
interface AddressFormControls {
  street: FormControl<string>;
  city: FormControl<string>;
  state: FormControl<string>;
  zip: FormControl<string>;
}
interface frm {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  address: FormGroup<AddressFormControls>;
}
@Component({
  selector: 'app-form-builder',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.css',
})
export class FormBuilderComponent {
  private fb = inject(NonNullableFormBuilder);
  formulario: FormGroup<frm> = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    address: this.fb.group<AddressFormControls>({
      street: this.fb.control('', Validators.required),
      city: this.fb.control('', Validators.required),
      state: this.fb.control('', Validators.required),
      zip: this.fb.control('', Validators.required),
    }),
  });

  // formulario = this.fb.group({
  //     firstName: ['', [Validators.required, Validators.minLength(3)]],
  //     lastName: ['', [Validators.required, Validators.minLength(3)]],

  //     address: this.fb.group({
  //       street: ['', Validators.required],
  //       city: ['', Validators.required],
  //       state: ['', Validators.required],
  //       zip: ['', Validators.required],
  //     }),
  //   });

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
