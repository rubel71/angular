import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagoryCreateComponent } from './catagory-create.component';

describe('CatagoryCreateComponent', () => {
  let component: CatagoryCreateComponent;
  let fixture: ComponentFixture<CatagoryCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatagoryCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatagoryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
