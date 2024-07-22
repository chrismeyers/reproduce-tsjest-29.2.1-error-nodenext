import { sum } from '../src/index.js';

describe('smoke test', () => {
  it('should add 2 + 2', () => {
    expect(sum(2, 2)).toBe(4);
  });
});
