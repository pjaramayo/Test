import { Routes } from '@angular/router';
import { ReactFormsComponent } from './Reactive Forms/form-control/react-forms.component';
import { FormGrpComponent } from './Reactive Forms/form-group/form-grp.component';
import { FormBuilderComponent } from './Reactive Forms/form-builder/form-builder.component';
import { FormArrayComponent } from './Reactive Forms/form-array/form-array.component';
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
