import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HigherorderComponent } from './higherorder.component';

describe('HigherorderComponent', () => {
  let component: HigherorderComponent;
  let fixture: ComponentFixture<HigherorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HigherorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HigherorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
