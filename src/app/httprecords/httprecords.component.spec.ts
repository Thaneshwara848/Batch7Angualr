import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttprecordsComponent } from './httprecords.component';

describe('HttprecordsComponent', () => {
  let component: HttprecordsComponent;
  let fixture: ComponentFixture<HttprecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttprecordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttprecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
