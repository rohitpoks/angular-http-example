import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitDataFormComponent } from './submit-data-form.component';

describe('SubmitDataFormComponent', () => {
  let component: SubmitDataFormComponent;
  let fixture: ComponentFixture<SubmitDataFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitDataFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
