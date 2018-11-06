import { TestBed, inject } from '@angular/core/testing';

import { LocalizationService } from './localization.service';

describe('LocalizationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalizationService]
    });
  });

  it('should be created', inject([LocalizationService], (service: LocalizationService) => {
    expect(service).toBeTruthy();
  }));
});
