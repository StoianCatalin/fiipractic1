import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeniuComponent } from './meniu.component';

describe('MeniuComponent', () => {
  let component: MeniuComponent;
  let fixture: ComponentFixture<MeniuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeniuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeniuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
