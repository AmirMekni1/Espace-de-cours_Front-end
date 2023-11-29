import { TestBed } from '@angular/core/testing';

import { ServiceEspaceEtudiantService } from './service-espace-etudiant.service';

describe('ServiceEspaceEtudiantService', () => {
  let service: ServiceEspaceEtudiantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceEspaceEtudiantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
