import { TestBed } from '@angular/core/testing';

import { NewPostGuard } from './new-post.guard';

describe('NewPostGuard', () => {
  let guard: NewPostGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NewPostGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
