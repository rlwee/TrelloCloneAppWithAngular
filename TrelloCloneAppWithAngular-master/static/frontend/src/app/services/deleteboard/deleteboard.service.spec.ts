import { TestBed } from '@angular/core/testing';

import { DeleteboardService } from './deleteboard.service';

describe('DeleteboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeleteboardService = TestBed.get(DeleteboardService);
    expect(service).toBeTruthy();
  });
});
