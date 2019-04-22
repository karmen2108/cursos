import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCursosComponent } from './details-cursos.component';

describe('DetailsCursosComponent', () => {
  let component: DetailsCursosComponent;
  let fixture: ComponentFixture<DetailsCursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsCursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
