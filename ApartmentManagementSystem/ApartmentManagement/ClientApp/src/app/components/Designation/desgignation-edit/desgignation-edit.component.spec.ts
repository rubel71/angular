import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesgignationEditComponent } from './desgignation-edit.component';

describe('DesgignationEditComponent', () => {
  let component: DesgignationEditComponent;
  let fixture: ComponentFixture<DesgignationEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesgignationEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesgignationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
