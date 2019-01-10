import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualContentComponent } from './actual-content.component';

describe('ActualContentComponent', () => {
  let component: ActualContentComponent;
  let fixture: ComponentFixture<ActualContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
