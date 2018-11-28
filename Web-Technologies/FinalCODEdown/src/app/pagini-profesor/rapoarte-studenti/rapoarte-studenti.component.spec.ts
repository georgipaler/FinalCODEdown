import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RapoarteStudentiComponent } from './rapoarte-studenti.component';

describe('RapoarteStudentiComponent', () => {
  let component: RapoarteStudentiComponent;
  let fixture: ComponentFixture<RapoarteStudentiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapoarteStudentiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RapoarteStudentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
