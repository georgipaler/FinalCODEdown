import { TestBed } from '@angular/core/testing';

import { LoginHelperService } from './login-helper.service';

describe('LoginHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginHelperService = TestBed.get(LoginHelperService);
    expect(service).toBeTruthy();
  });
});
