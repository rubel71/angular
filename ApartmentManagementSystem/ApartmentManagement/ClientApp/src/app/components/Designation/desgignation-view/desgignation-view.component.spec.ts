import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesgignationViewComponent } from './desgignation-view.component';

describe('DesgignationViewComponent', () => {
  let component: DesgignationViewComponent;
  let fixture: ComponentFixture<DesgignationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesgignationViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesgignationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
