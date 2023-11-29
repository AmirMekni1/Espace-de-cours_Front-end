import { TestBed } from '@angular/core/testing';

import { ServiceEspaceEnseignantService } from './service-espace-enseignant.service';

describe('ServiceEspaceEnseignantService', () => {
  let service: ServiceEspaceEnseignantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceEspaceEnseignantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
