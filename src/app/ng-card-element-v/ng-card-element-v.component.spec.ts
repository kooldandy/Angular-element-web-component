import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCardElementVComponent } from './ng-card-element-v.component';

describe('NgCardElementVComponent', () => {
  let component: NgCardElementVComponent;
  let fixture: ComponentFixture<NgCardElementVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgCardElementVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCardElementVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
