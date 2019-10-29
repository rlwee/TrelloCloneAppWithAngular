import { TestBed } from '@angular/core/testing';

import { DeletecardService } from './deletecard.service';

describe('DeletecardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeletecardService = TestBed.get(DeletecardService);
    expect(service).toBeTruthy();
  });
});
