import {describe, expect, test} from '@jest/globals';
import {Sum} from './sum';

describe('sum module', () => {
  let s:Sum = new Sum();
  test('adds 1 + 2 to equal 3', () => {
    expect(s.sum(1, 2)).toBe(3);
  });
});