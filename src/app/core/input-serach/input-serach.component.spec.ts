import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSerachComponent } from './input-serach.component';

describe('InputSerachComponent', () => {
  let component: InputSerachComponent;
  let fixture: ComponentFixture<InputSerachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputSerachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSerachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
