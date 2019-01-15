import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTesteComponent } from './lista-teste.component';

describe('ListaTesteComponent', () => {
  let component: ListaTesteComponent;
  let fixture: ComponentFixture<ListaTesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
