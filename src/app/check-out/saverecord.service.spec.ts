import { TestBed } from '@angular/core/testing';

import { SaverecordService } from './saverecord.service';

describe('SaverecordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaverecordService = TestBed.get(SaverecordService);
    expect(service).toBeTruthy();
  });
});
