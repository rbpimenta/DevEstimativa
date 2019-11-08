import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimativaLoginComponent } from './estimativa-login.component';

describe('EstimativaLoginComponent', () => {
  let component: EstimativaLoginComponent;
  let fixture: ComponentFixture<EstimativaLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimativaLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimativaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
