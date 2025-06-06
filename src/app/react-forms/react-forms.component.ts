import { Component } from '@angular/core';
import {FormControl,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-react-forms',
  imports: [ReactiveFormsModule ],
  templateUrl: './react-forms.component.html',
  styleUrl: './react-forms.component.css',
})
export class ReactFormsComponent {
  name = new FormControl('');

  updateName  (){
    this.name.setValue("nancy");
  }
}

