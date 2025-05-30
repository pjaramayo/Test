import { Routes } from '@angular/router';
import { ReactFormsComponent } from './react-forms/react-forms.component';
import { FormGrpComponent } from './form-grp/form-grp.component';

export const routes: Routes = [
{
  path:'',
  component:ReactFormsComponent,
},
{
  path:'form-group',
   component: FormGrpComponent,
},
];
