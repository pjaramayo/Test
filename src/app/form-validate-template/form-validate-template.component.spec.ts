import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidateTemplateComponent } from './form-validate-template.component';

describe('FormValidateTemplateComponent', () => {
  let component: FormValidateTemplateComponent;
  let fixture: ComponentFixture<FormValidateTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormValidateTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormValidateTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
