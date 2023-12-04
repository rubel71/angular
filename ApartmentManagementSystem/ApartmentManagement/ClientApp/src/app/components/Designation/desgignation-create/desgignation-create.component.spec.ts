import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesgignationCreateComponent } from './desgignation-create.component';

describe('DesgignationCreateComponent', () => {
  let component: DesgignationCreateComponent;
  let fixture: ComponentFixture<DesgignationCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesgignationCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesgignationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
