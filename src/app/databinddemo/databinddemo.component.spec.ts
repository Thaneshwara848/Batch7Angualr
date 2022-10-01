import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabinddemoComponent } from './databinddemo.component';

describe('DatabinddemoComponent', () => {
  let component: DatabinddemoComponent;
  let fixture: ComponentFixture<DatabinddemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabinddemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabinddemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
