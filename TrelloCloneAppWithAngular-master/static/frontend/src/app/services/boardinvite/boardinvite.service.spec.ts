import { TestBed } from '@angular/core/testing';

import { BoardinviteService } from './boardinvite.service';

describe('BoardinviteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoardinviteService = TestBed.get(BoardinviteService);
    expect(service).toBeTruthy();
  });
});
