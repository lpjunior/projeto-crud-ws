import { TestBed } from '@angular/core/testing';

import { ViagensService } from './viagens.service';

describe('ViagensService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViagensService = TestBed.get(ViagensService);
    expect(service).toBeTruthy();
  });
});
