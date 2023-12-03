import { TestBed } from '@angular/core/testing';

import { VerificationEmailService } from './verification-email.service';

describe('VerificationEmailService', () => {
  let service: VerificationEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerificationEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
