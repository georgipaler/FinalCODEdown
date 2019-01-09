import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunctajeTesteComponent } from './punctaje-teste.component';

describe('PunctajeTesteComponent', () => {
  let component: PunctajeTesteComponent;
  let fixture: ComponentFixture<PunctajeTesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunctajeTesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunctajeTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
