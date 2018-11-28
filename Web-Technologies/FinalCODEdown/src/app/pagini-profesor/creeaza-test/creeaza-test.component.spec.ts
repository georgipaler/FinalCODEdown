import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreeazaTestComponent } from './creeaza-test.component';

describe('CreeazaTestComponent', () => {
  let component: CreeazaTestComponent;
  let fixture: ComponentFixture<CreeazaTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreeazaTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreeazaTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
