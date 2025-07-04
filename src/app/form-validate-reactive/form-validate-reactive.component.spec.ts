import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidateReactiveComponent } from './form-validate-reactive.component';

describe('FormValidateReactiveComponent', () => {
  let component: FormValidateReactiveComponent;
  let fixture: ComponentFixture<FormValidateReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormValidateReactiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormValidateReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
