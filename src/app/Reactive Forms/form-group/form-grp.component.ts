import { Component } from '@angular/core';
import { Address, ProfileForm } from './profile-form.model';

import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  AbstractControl,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-grp',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-grp.component.html',
  styleUrl: './form-grp.component.css',
})
export class FormGrpComponent {
  formGr = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),

    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    }),
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.formGr.value);
  }
  updateProfile() {
    this.formGr.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street',
      },
    });
  }

  // Obtener el control 'firstName' de forma segura como AbstractControl
 firstNameControl: AbstractControl | null = this.formGr.get('firstName');


  if(firstNameControl:any) {
    console.log('Valor:', firstNameControl.value);
    console.log('Si entro')
  }
}
