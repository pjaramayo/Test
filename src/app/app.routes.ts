import { Routes } from '@angular/router';
import { ReactFormsComponent } from './form-control/react-forms.component';
import { FormGrpComponent } from './form-group/form-grp.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { FormValidateTemplateComponent } from './form-validate-template/form-validate-template.component';
import { FormValidateReactiveComponent } from './form-validate-reactive/form-validate-reactive.component';
export const routes: Routes = [
  {
    path: '',
    component: ReactFormsComponent,
  },
  {
    path: 'form-group',
    component: FormGrpComponent,
  },
  {
    path: 'form-builder',
    component: FormBuilderComponent,
  },
  { path: 'form-array', component: FormArrayComponent },
  { path: 'form-validate-template', component: FormValidateTemplateComponent },
  { path: 'form-validate-reactive', component: FormValidateReactiveComponent },
];
