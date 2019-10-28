import { TestBed } from '@angular/core/testing';

import { DeletelistService } from './deletelist.service';

describe('DeletelistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeletelistService = TestBed.get(DeletelistService);
    expect(service).toBeTruthy();
  });
});
