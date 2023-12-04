import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagoryViewComponent } from './catagory-view.component';

describe('CatagoryViewComponent', () => {
  let component: CatagoryViewComponent;
  let fixture: ComponentFixture<CatagoryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatagoryViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatagoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
