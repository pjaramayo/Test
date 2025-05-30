import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { FormGrpComponent } from "./form-grp/form-grp.component";
// import { ReactFormsComponent } from "./react-forms/react-forms.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'forms';
}
