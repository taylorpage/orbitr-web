import { TestBed, inject } from '@angular/core/testing';

import { SubscribeService } from './subscribe.service';

describe('SubscribeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubscribeService]
    });
  });

  it('should be created', inject([SubscribeService], (service: SubscribeService) => {
    expect(service).toBeTruthy();
  }));
});
