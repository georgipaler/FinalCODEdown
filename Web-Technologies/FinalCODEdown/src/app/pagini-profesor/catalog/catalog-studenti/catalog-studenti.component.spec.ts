import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogStudentiComponent } from './catalog-studenti.component';

describe('CatalogStudentiComponent', () => {
  let component: CatalogStudentiComponent;
  let fixture: ComponentFixture<CatalogStudentiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogStudentiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogStudentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
