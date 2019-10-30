import { TestBed } from '@angular/core/testing';

import { DragcardService } from './dragcard.service';

describe('DragcardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DragcardService = TestBed.get(DragcardService);
    expect(service).toBeTruthy();
  });
});
