import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormtobesentComponent } from './formtobesent.component';

describe('FormtobesentComponent', () => {
  let component: FormtobesentComponent;
  let fixture: ComponentFixture<FormtobesentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormtobesentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormtobesentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
