import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteleMeleComponent } from './testele-mele.component';

describe('TesteleMeleComponent', () => {
  let component: TesteleMeleComponent;
  let fixture: ComponentFixture<TesteleMeleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteleMeleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteleMeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
