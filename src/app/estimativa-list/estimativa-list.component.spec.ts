import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimativaListComponent } from './estimativa-list.component';

describe('EstimativaListComponent', () => {
  let component: EstimativaListComponent;
  let fixture: ComponentFixture<EstimativaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimativaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimativaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
