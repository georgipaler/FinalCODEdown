import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RapoarteleMeleComponent } from './rapoartele-mele.component';

describe('RapoarteleMeleComponent', () => {
  let component: RapoarteleMeleComponent;
  let fixture: ComponentFixture<RapoarteleMeleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapoarteleMeleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RapoarteleMeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
