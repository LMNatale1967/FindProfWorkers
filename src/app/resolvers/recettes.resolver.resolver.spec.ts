import { TestBed } from '@angular/core/testing';

import { RecettesResolverResolver } from './recettes.resolver.resolver';

describe('RecettesResolverResolver', () => {
  let resolver: RecettesResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(RecettesResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
