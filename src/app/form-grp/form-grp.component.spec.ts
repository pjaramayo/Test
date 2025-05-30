import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGrpComponent } from './form-grp.component';

describe('FormGrpComponent', () => {
  let component: FormGrpComponent;
  let fixture: ComponentFixture<FormGrpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormGrpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
