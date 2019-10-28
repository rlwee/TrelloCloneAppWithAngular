import { TestBed } from '@angular/core/testing';

import { CreatecardService } from './createcard.service';

describe('CreatecardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreatecardService = TestBed.get(CreatecardService);
    expect(service).toBeTruthy();
  });
});
