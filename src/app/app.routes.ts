import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ReactFormsComponent } from './react-forms/react-forms.component';
import { FormGrpComponent } from './form-group/form-grp.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormArrayComponent } from './form-array/form-array.component';

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
  { path: 'form-array',
    component: FormArrayComponent,
  },
];
