import { TestBed } from '@angular/core/testing';

import { PostPageService } from './post-page.service';

describe('PostPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostPageService = TestBed.get(PostPageService);
    expect(service).toBeTruthy();
  });
});
