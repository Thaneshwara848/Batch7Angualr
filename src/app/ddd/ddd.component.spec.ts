import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DDDComponent } from './ddd.component';

describe('DDDComponent', () => {
  let component: DDDComponent;
  let fixture: ComponentFixture<DDDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DDDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DDDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
