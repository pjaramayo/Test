import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para @if
import { FormsModule } from '@angular/forms'; // ¡FUNDAMENTAL para [(ngModel)] y #name="ngModel"!

// ¡IMPORTANTE! Asegúrate que la ruta sea correcta.
// Si está en la misma carpeta:
import { ForbiddenValidatorDirective } from './forbidden-name.directive';
// Si está en una carpeta diferente, por ejemplo, 'src/app/shared/directives':

interface Actor {
  name: string;
}

@Component({
  selector: 'app-form-validate-template',
  standalone: true, // ¡Este debe ser true!
  imports: [
    CommonModule,
    FormsModule,
    ForbiddenValidatorDirective, // Aquí es donde lo importamos directamente
  ],
  templateUrl: './form-validate-template.component.html',
  styleUrl: './form-validate-template.component.css',
})

export class FormValidateTemplateComponent implements OnInit {
  model:string='';
  donBool:boolean = false;

  actor: Actor = {
    name: 'Superman',
  };

  constructor() {}

  ngOnInit(): void {
    console.log(this.actor.name)
  }

  onSubmit(): void {
    console.log('Formulario enviado!', this.actor);
  }

  cambiarValor(valorDelInput:string){
  // console.log('actor.name:', valorDelInput);
  this.donBool = !!valorDelInput && valorDelInput.length > 4;

}
}
