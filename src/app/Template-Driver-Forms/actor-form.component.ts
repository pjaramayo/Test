import { Component } from '@angular/core';

import { Actor } from '../../Actor';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-actor-form',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './actor-form.component.html',
  styleUrl: './actor-form.component.css',
})
export class ActorFormComponent {
  skills = ['Method Acting', 'Singing', 'Dancing', 'Swordfighting'];
  model = new Actor(18, 'Tom Cruise', this.skills[3], 'CW ing');
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
   newActor() {
    this.model = new Actor(42, '', '');
  }

  showFormControls(form: any) {
    return form && form.controls.name && form.controls.name.value;
  }
}
